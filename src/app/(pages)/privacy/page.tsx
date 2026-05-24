import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalShell } from '@/components/features/LegalShell';

export const metadata: Metadata = {
  title: 'Personvern – Lillehammer Moske',
  description:
    'Personvernerklæring for Lillehammer Moske. Hvilke personopplysninger vi samler inn, hvorfor, hvordan de lagres, og hvilke rettigheter du har.',
  alternates: { canonical: 'https://lillehammermoske.no/privacy/' },
};

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Personvern"
      title="Personvernerklæring"
      arabicTitle="سياسة الخصوصية"
      lead="Vi behandler personopplysninger med respekt og åpenhet. Denne erklæringen forklarer hva vi samler inn, hvorfor, og hvilke valg du har."
      lastUpdated="24. mai 2026"
    >
      <h2>Hvem er behandlingsansvarlig</h2>
      <p>
        <strong>The Muslim Cultural Center Lillehammer</strong> (i daglig tale
        Lillehammer Moske), organisasjonsnummer 988 588 660, med adresse
        Bankgata 12, 2609 Lillehammer, er behandlingsansvarlig for
        personopplysninger som samles inn via lillehammermoske.no.
      </p>
      <p>
        Har du spørsmål til personvern eller ønsker å bruke rettighetene dine,
        kontakt oss på{' '}
        <a href="mailto:info@lillehammermoske.no">info@lillehammermoske.no</a>.
      </p>

      <h2>Hvilke opplysninger vi samler inn</h2>
      <p>
        Vi samler bare inn opplysninger du selv gir oss gjennom et skjema eller
        en interaksjon på siden:
      </p>
      <ul>
        <li>
          <strong>Kontaktskjema:</strong> navn, e-postadresse og innholdet i
          meldingen du sender.
        </li>
        <li>
          <strong>Medlemsregistrering:</strong> navn, kontaktopplysninger og
          den informasjonen som er nødvendig for å registrere medlemskap i
          tråd med vedtektene.
        </li>
        <li>
          <strong>Donasjon:</strong> donasjoner skjer via eksterne tjenester
          (for eksempel Vipps). Vi mottar ikke betalingsinformasjon, men kan
          motta navn og beløp dersom du oppgir det.
        </li>
        <li>
          <strong>Quiz for elever:</strong> navn, alder og svarene på spørsmålene.
          Dette brukes til at lærerne kan se hvordan elevene gjør det på prøver
          i Quranskolen.
        </li>
      </ul>
      <p>
        Vi bruker ikke sporing eller målgruppeprofilering, og vi selger ikke
        opplysninger til tredjeparter.
      </p>

      <h2>Hvorfor vi behandler opplysningene</h2>
      <ul>
        <li>For å besvare henvendelser og holde kontakt med medlemmer.</li>
        <li>For å organisere undervisning, arrangementer og medlemsforhold.</li>
        <li>For å føre regnskap over donasjoner i tråd med norsk lov.</li>
        <li>For å gi tilbakemelding på elevprøver i Quranskolen.</li>
      </ul>
      <p>
        Det rettslige grunnlaget er enten samtykke (du fyller ut et skjema
        eller leverer en prøve), berettiget interesse i drift av en
        ideell organisasjon, eller rettslig forpliktelse (regnskap).
      </p>

      <h2>Hvordan opplysningene lagres</h2>
      <p>
        Skjemaer og prøvesvar lagres i regneark og e-postkontoer hos Google,
        som behandler dataene på vegne av moskéen som databehandler. Tilgang er
        begrenset til styremedlemmer og lærere som trenger informasjonen i sin
        rolle.
      </p>
      <p>
        Vi oppbevarer opplysninger så lenge det er nødvendig for formålet de
        ble samlet inn for, og deretter sletter eller anonymiserer vi dem.
        Regnskapsinformasjon oppbevares i fem år, slik bokføringsloven krever.
      </p>

      <h2>Tredjeparter vi bruker</h2>
      <ul>
        <li>
          <strong>Google Workspace</strong> (e-post, regneark, skjemaer) for
          lagring og kommunikasjon.
        </li>
        <li>
          <strong>GitHub Pages</strong> for hosting av selve nettsiden.
          Tilgangsloggene der inneholder IP-adresser, men vi bruker dem ikke
          aktivt.
        </li>
        <li>
          <strong>Vipps</strong> for donasjoner. Vipps har sin egen
          personvernerklæring.
        </li>
        <li>
          <strong>WhatsApp</strong> for fellesskapsgrupper. Du må selv velge å
          bli med via en lenke vi deler.
        </li>
      </ul>

      <h2>Informasjonskapsler (cookies)</h2>
      <p>
        Selve lillehammermoske.no setter ingen markedsføringscookies og bruker
        ikke analyseverktøy. Innebygde tjenester (som videoer eller eksterne
        kart) kan sette egne cookies dersom du åpner dem.
      </p>

      <h2>Dine rettigheter</h2>
      <p>Du har rett til å:</p>
      <ul>
        <li>be om innsyn i opplysningene vi har om deg,</li>
        <li>be om at uriktige opplysninger blir rettet,</li>
        <li>be om at opplysninger blir slettet når formålet er oppfylt,</li>
        <li>be om en kopi av dine opplysninger i et leselig format,</li>
        <li>trekke tilbake et samtykke du tidligere har gitt.</li>
      </ul>
      <p>
        Send en e-post til{' '}
        <a href="mailto:info@lillehammermoske.no">info@lillehammermoske.no</a>{' '}
        så svarer vi innen rimelig tid. Du kan også klage til Datatilsynet
        dersom du mener vi ikke følger reglene.
      </p>

      <h2>Sikkerhet</h2>
      <p>
        Vi tar passende forhåndsregler for å hindre uautorisert tilgang,
        endring eller sletting av opplysninger. Tilgang til regneark og
        e-post er beskyttet med to-faktorautentisering der det er mulig.
      </p>

      <h2>Endringer</h2>
      <p>
        Vi kan oppdatere denne erklæringen for å gjenspeile endringer i lover,
        tjenester eller praksis. Vesentlige endringer vil bli kunngjort på{' '}
        <Link href="/">forsiden</Link>.
      </p>
    </LegalShell>
  );
}
