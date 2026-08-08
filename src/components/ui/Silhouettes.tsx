interface SilhouetteProps {
  className?: string;
}

/**
 * Neutral head-and-shoulders silhouettes used instead of photos of the
 * Quran school staff. Stroke-based so they sit alongside the lucide icons
 * used elsewhere on the site.
 */
export function MaleSilhouette({ className = '' }: SilhouetteProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      focusable="false"
    >
      <circle cx="12" cy="8.4" r="4.15" />
      <path d="M4.4 20.9a7.6 7.6 0 0 1 15.2 0" />
    </svg>
  );
}

export function HijabSilhouette({ className = '' }: SilhouetteProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      focusable="false"
    >
      {/* hijab, draped from the crown down over the shoulders */}
      <path d="M12 3c-3.75 0-6.2 2.65-6.2 6.35 0 3.3.5 5.2-.75 7.4-.7 1.25-1.65 2-1.65 2 1.95 1.6 5.05 2.4 8.6 2.4s6.65-.8 8.6-2.4c0 0-.95-.75-1.65-2-1.25-2.2-.75-4.1-.75-7.4C18.2 5.65 15.75 3 12 3Z" />
      {/* face opening */}
      <path d="M12 6.05c2.2 0 3.5 1.7 3.5 4.2 0 2.85-1.6 5.05-3.5 5.05s-3.5-2.2-3.5-5.05c0-2.5 1.3-4.2 3.5-4.2Z" />
    </svg>
  );
}
