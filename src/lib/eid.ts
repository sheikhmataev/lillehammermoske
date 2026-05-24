// Eid bønn — Wednesday 27 May 2026, 09:30 Europe/Oslo (CEST)
export const EID_PRAYER_TIME = new Date('2026-05-27T09:30:00+02:00');

// Show the festive hero until end of day 31 May 2026. Edit this date to
// extend, shorten, or disable the temporary Eid redesign. After this
// instant the regular Hero takes over automatically (after the next deploy).
export const EID_ACTIVE_UNTIL = new Date('2026-05-31T23:59:59+02:00');

export function isEidWindowActive(now: Date = new Date()): boolean {
  return now < EID_ACTIVE_UNTIL;
}
