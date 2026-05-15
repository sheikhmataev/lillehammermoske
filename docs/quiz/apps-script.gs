/**
 * Lillehammer Moske – Quiz submissions receiver.
 *
 * Setup:
 *  1. Open the Google Sheet you want submissions stored in.
 *  2. Extensions → Apps Script. Replace Code.gs with this file.
 *  3. Set the SHARED_SECRET below to a random string of your choosing.
 *  4. Deploy → New deployment → Type: Web app.
 *       Execute as: Me
 *       Who has access: Anyone
 *     Copy the resulting /exec URL.
 *  5. In the website project, set in .env.local:
 *       NEXT_PUBLIC_QUIZ_SUBMIT_URL=<that /exec URL>
 *       NEXT_PUBLIC_QUIZ_SUBMIT_SECRET=<the same shared secret>
 *
 * The script writes two tabs:
 *  - "Submissions" – one row per quiz attempt (summary)
 *  - "Answers"     – one row per question answered (for filtering / per-question analysis)
 * Tabs are created automatically on first submission.
 */

const SHARED_SECRET = 'meowwwewfehnwieh22';

const SUBMISSIONS_TAB = 'Submissions';
const ANSWERS_TAB = 'Answers';

const SUBMISSIONS_HEADERS = [
  'Timestamp',
  'Quiz slug',
  'Quiz title',
  'Name',
  'Age',
  'Score',
  'Total',
  'Percent',
];

const ANSWERS_HEADERS = [
  'Timestamp',
  'Quiz slug',
  'Name',
  'Age',
  'Question #',
  'Question',
  'Selected letter',
  'Selected text',
  'Correct letter',
  'Correct text',
  'Is correct',
];

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (!SHARED_SECRET || payload.secret !== SHARED_SECRET) {
      return jsonResponse({ ok: false, error: 'Unauthorized' });
    }

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const submissionsSheet = getOrCreateSheet(ss, SUBMISSIONS_TAB, SUBMISSIONS_HEADERS);
    const answersSheet = getOrCreateSheet(ss, ANSWERS_TAB, ANSWERS_HEADERS);

    const submittedAt = payload.submittedAt || new Date().toISOString();
    const pct = payload.totalQuestions
      ? Math.round((payload.score / payload.totalQuestions) * 100)
      : 0;

    submissionsSheet.appendRow([
      submittedAt,
      payload.quizSlug,
      payload.quizTitle,
      payload.name,
      payload.age,
      payload.score,
      payload.totalQuestions,
      pct,
    ]);

    const rows = (payload.answers || []).map((a) => [
      submittedAt,
      payload.quizSlug,
      payload.name,
      payload.age,
      a.questionNumber,
      a.questionText,
      a.selectedLetter || '',
      a.selectedText || '',
      a.correctLetter,
      a.correctText,
      a.isCorrect ? 'TRUE' : 'FALSE',
    ]);
    if (rows.length) {
      answersSheet
        .getRange(answersSheet.getLastRow() + 1, 1, rows.length, ANSWERS_HEADERS.length)
        .setValues(rows);
    }

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) });
  }
}

function doGet() {
  return jsonResponse({ ok: true, info: 'Lillehammer Moske quiz receiver. POST submissions here.' });
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
  }
  return sheet;
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
