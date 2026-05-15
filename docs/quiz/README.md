,,# Quiz feature

The `/quiz` route lets students take multiple-choice quizzes. Names, ages, and
answers are submitted to a Google Sheet via a Google Apps Script Web App.

## Authoring a quiz

Drop a new `.md` file into `content/quizzes/`. The slug in the frontmatter
becomes the URL: `content/quizzes/proeve-niva-2.md` → `/quiz/proeve-niva-2`.

```markdown
---
title: Flervalgsspørsmål prøve – Nivå 2
slug: proeve-niva-2
intro: Velg ett svar per spørsmål.
---

## Section title

1. Question text
- A) First option
- B) Second option *
- C) Third option
- D) Fourth option

2. Another question
- A) Yes *
- B) No
```

Rules:

- Frontmatter must include `title` and `slug`. `intro` is optional.
- Slugs must be lowercase letters, digits, and dashes only.
- `## Heading` lines start a new section (one page in the quiz).
- Questions are numbered consecutively starting at 1, no gaps.
- Each question needs at least 2 options labelled `A)`, `B)`, ….
- Mark the correct option by ending the line with ` *` (space then asterisk).
- Exactly one option must be correct per question.

Parser errors fail the build, so a malformed quiz will not deploy.

## Storage setup (Google Sheets)

1. Create a Google Sheet to receive submissions.
2. **Extensions → Apps Script**. Replace `Code.gs` with the contents of
   [`apps-script.gs`](./apps-script.gs).
3. Set `SHARED_SECRET` in the script to a long random string.
4. **Deploy → New deployment → Web app**:
   - *Execute as*: Me
   - *Who has access*: Anyone
   Copy the `/exec` URL.
5. In the repo, set:
   ```
   NEXT_PUBLIC_QUIZ_SUBMIT_URL=<the /exec URL from step 4>
   NEXT_PUBLIC_QUIZ_SUBMIT_SECRET=<the same shared secret>
   ```
   Add these to `.env.local` for local development, and to the GitHub Pages
   build environment (repo settings → Secrets and variables → Actions) for
   production deploys. They must be `NEXT_PUBLIC_*` because the site is
   statically exported and the POST happens from the browser.

On first submission, the script creates two tabs:

- **Submissions** – one row per attempt: timestamp, quiz, name, age, score,
  total, percent.
- **Answers** – one row per question answered: timestamp, quiz, name, age,
  question number, question text, selected letter/text, correct letter/text,
  is_correct.

Filter the *Answers* tab by question number to see how everyone did on a
specific question, or by name to see one student's full attempt.

## Security note

The submit URL and shared secret are embedded in the client bundle. The secret
raises the bar against drive-by spam but is not a real authentication layer —
anyone determined enough can extract it from the page source. For a small
mosque site this is an appropriate threat model. If submissions become a
target, rotate the shared secret and redeploy.

## Updating the script

If you change the Apps Script after deployment, you have to **Deploy → Manage
deployments → edit → New version** for the changes to take effect. The Web App
URL stays the same.
