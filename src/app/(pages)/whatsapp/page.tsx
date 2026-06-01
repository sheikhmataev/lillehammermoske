'use client';

import { useEffect } from 'react';
import { config } from '@/lib/config';

export default function WhatsAppRedirect() {
  useEffect(() => {
    window.location.href = config.social.whatsapp;
  }, []);

  return (
    <div className="band band-ink flex min-h-screen items-center justify-center">
      <div className="relative px-6 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366]/20 text-[#25D366]">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.2.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2"/></svg>
        </span>
        <p className="mt-5 text-lg text-white/85">Sender deg til WhatsApp…</p>
        <a href={config.social.whatsapp} className="mt-3 inline-block font-semibold text-[#E6C547] underline decoration-[#D4AF37]/50 underline-offset-4 hover:text-white">
          Klikk her hvis du ikke blir videresendt
        </a>
      </div>
    </div>
  );
}
