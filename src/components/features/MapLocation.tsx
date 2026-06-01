import { Band } from '@/components/ui/Band';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function MapLocation() {
  return (
    <Band tone="parchment">
      <SectionHeading
        tone="cream"
        eyebrow="Veien til oss"
        arabic="موقعنا"
        title="Finn oss"
        lead="Bankgata 12, 2609 Lillehammer — midt i sentrum."
      />

      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border border-[#1B5E20]/10 bg-white/70 p-2 shadow-[0_24px_60px_-35px_rgba(12,42,26,0.4)] backdrop-blur-sm">
        <div className="overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1761236092080!6m8!1m7!1ssLSGmqX8nU14EaK5FSGtdQ!2m2!1d61.1143942051249!2d10.46785348861282!3f235.2130591569735!4f-14.18229687808244!5f0.7820865974627469"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lillehammer Moske Lokasjon"
          />
        </div>
      </div>
    </Band>
  );
}
