'use client';

export function IslamicPattern({ className = '', opacity = 0.05 }: { className?: string; opacity?: number }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 800"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern id="islamic-star" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            {/* 8-pointed star tessellation */}
            <path
              d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.5"
            />
            <circle cx="50" cy="50" r="8" fill="none" stroke="#E6C547" strokeWidth="0.3" />
            <path
              d="M50 0 L50 10 M50 90 L50 100 M0 50 L10 50 M90 50 L100 50"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.3"
            />
            {/* Corner connectors */}
            <path
              d="M0 0 L15 15 M100 0 L85 15 M0 100 L15 85 M100 100 L85 85"
              fill="none"
              stroke="#E6C547"
              strokeWidth="0.3"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-star)" />
      </svg>
    </div>
  );
}

export function CrescentMoon({ className = '', size = 64 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="45" cy="50" r="35" fill="currentColor" />
      <circle cx="58" cy="45" r="30" fill="black" fillOpacity="0.99" className="mix-blend-destination-out" />
      {/* Star */}
      <path
        d="M78 30 L80 36 L86 36 L81 40 L83 46 L78 42 L73 46 L75 40 L70 36 L76 36 Z"
        fill="currentColor"
      />
    </svg>
  );
}
