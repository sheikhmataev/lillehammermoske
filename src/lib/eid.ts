// Eid bønn — Wednesday 27 May 2026, 09:30 Europe/Oslo (CEST).
// Kept for reuse next year (1448 H): update both dates and flip
// EID_ENABLED back to true to bring the festive hero back.
export const EID_PRAYER_TIME = new Date('2026-05-27T09:30:00+02:00');

// Master switch for the temporary Eid al-Adha homepage hero.
// Eid al-Adha 1447 is over, so it's turned off and the regular Hero shows.
// To re-enable next year: set EID_ENABLED = true, bump EID_PRAYER_TIME and
// EID_ACTIVE_UNTIL to the new dates.
export const EID_ENABLED = false;

// When enabled, show the festive hero until this instant, then auto-revert.
export const EID_ACTIVE_UNTIL = new Date('2026-05-31T23:59:59+02:00');

export function isEidWindowActive(now: Date = new Date()): boolean {
  return EID_ENABLED && now < EID_ACTIVE_UNTIL;
}
