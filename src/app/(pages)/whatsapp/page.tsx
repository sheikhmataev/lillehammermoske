'use client';

import { useEffect } from 'react';
import { config } from '@/lib/config';

export default function WhatsAppRedirect() {
  useEffect(() => {
    window.location.href = config.social.whatsapp;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-4">Sender deg til WhatsApp...</p>
        <a
          href={config.social.whatsapp}
          className="text-emerald-900 font-semibold underline"
        >
          Klikk her hvis du ikke blir videresendt
        </a>
      </div>
    </div>
  );
}
