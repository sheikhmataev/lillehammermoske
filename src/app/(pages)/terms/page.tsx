import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalShell } from '@/components/features/LegalShell';

export const metadata: Metadata = {
  title: 'Vilkår – Lillehammer Moske',
  description:
    'Bruksvilkår for lillehammermoske.no. Hva siden er ment for, ansvar, donasjoner, eksterne lenker og kontaktinformasjon.',
  alternates: { canonical: 'https://lillehammermoske.no/terms/' },
};

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Vilkår"
      title="Vilkår for bruk"
      arabicTitle="شروط الاستخدام"
      lead="Disse vilkårene beskriver bruken av lillehammermoske.no. Ved å bruke siden samtykker du i innholdet under."
      lastUpdated="24. mai 2026"
    >
      <h2>Om nettsiden</h2>
      <p>
        Lillehammermoske.no driftes av{' '}
        <strong>The Muslim Cultural Center Lillehammer</strong>{' '}
        (organisasjonsnummer 988 588 660), en ideell organisasjon med adresse
        Bankgata 12, 2609 Lillehammer. Siden er et informasjonsverktøy for
        medlemmer og besøkende — den selger ikke produkter eller tjenester.
      </p>

      <h2>Bruk av siden</h2>
      <p>
        Innholdet på siden er ment for personlig og ikke-kommersiell bruk. Du
        står fritt til å lese, dele lenker, og bruke informasjonen i ditt eget
        praksisliv. Du kan ikke kopiere store deler av innholdet for
        kommersielle formål uten skriftlig samtykke.
      </p>
      <p>
        Vi forventer at brukere ikke forsøker å forstyrre driften av siden,
        skaffe seg uautorisert tilgang til systemer eller skjemaer, eller
        misbruker innsendingsskjemaer.
      </p>

      <h2>Bønnetider</h2>
      <p>
        Bønnetidene som vises er beregnet for Lillehammer og oppdateres
        automatisk. Tidspunktene er nøyaktige nok til daglig bruk, men kan
        avvike minutter fra andre kalendere eller fra det som annonseres
        lokalt i moskéen. Ved tvil følger du tiden som blir kunngjort i
        moskéen.
      </p>

      <h2>Quiz og prøver</h2>
      <p>
        Quizene på <Link href="/quiz">/quiz</Link> er pedagogiske hjelpemidler
        i Quranskolen. Resultatene er kun ment for elev og lærer, og brukes
        ikke til andre formål enn å gi tilbakemelding på læring.
      </p>

      <h2>Donasjoner</h2>
      <p>
        Donasjoner er frivillige og gjennomføres via tredjeparts
        betalingstjenester (for eksempel Vipps). Donasjoner refunderes som
        hovedregel ikke. Har du donert ved en feil, ta kontakt så finner vi en
        løsning sammen.
      </p>

      <h2>Eksterne lenker</h2>
      <p>
        Siden kan inneholde lenker til eksterne tjenester (WhatsApp, Vipps,
        Google Maps og lignende). Vi har ikke kontroll over innholdet på
        eksterne sider og fraskriver oss ansvar for materiale, vilkår eller
        personvernpraksis hos disse.
      </p>

      <h2>Immaterielle rettigheter</h2>
      <p>
        Tekst, logo og originalt visuelt materiale på siden tilhører
        The Muslim Cultural Center Lillehammer. Quran-vers og hadith er fra det
        offentlige rom og kan deles videre. Tredjepartsbilder eller -fonter er
        brukt under sine respektive lisenser.
      </p>

      <h2>Ansvarsbegrensning</h2>
      <p>
        Innholdet leveres «som det er», uten garanti for at det er fullstendig
        eller feilfritt til enhver tid. Religiøs veiledning på siden er ment
        som informasjon, ikke som personlig fatwa eller juridisk rådgivning —
        for konkrete spørsmål, kontakt moskéen direkte.
      </p>
      <p>
        Vi er ikke ansvarlige for indirekte tap som måtte oppstå ved bruk av
        siden, så langt loven tillater.
      </p>

      <h2>Endringer i vilkårene</h2>
      <p>
        Vilkårene kan oppdateres ved behov. Den til enhver tid gjeldende
        versjonen er den som ligger på denne siden, med datoen nederst.
      </p>

      <h2>Lovvalg</h2>
      <p>
        Vilkårene reguleres av norsk rett. Eventuelle tvister skal forsøkes
        løst i minnelighet, og hvis det ikke lar seg gjøre, ved verneting i
        Lillehammer.
      </p>

      <h2>Kontakt</h2>
      <p>
        Spørsmål om vilkårene? Send en e-post til{' '}
        <a href="mailto:info@lillehammermoske.no">info@lillehammermoske.no</a>{' '}
        eller bruk skjemaet på <Link href="/contact">kontaktsiden</Link>.
      </p>
    </LegalShell>
  );
}
