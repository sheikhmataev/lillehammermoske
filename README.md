# 🕌 Lillehammer Moske - Offisiell Nettside

**The Muslim Cultural Center Lillehammer** - En moderne, brukervennlig nettside for det muslimske fellesskapet i Lillehammer.

🌐 **Nettside:** https://lillehammermoske.no (planlagt)

---

## 📋 Planlagte Funksjoner

### 🤝 Felleskap & Kommunikasjon
- **WhatsApp gruppe parser** - Automatisk oppdatering av gruppeinnlegg
- **Kontaktskjemaer** - Integrerte skjemaer for henvendelser
- **Kontakt Imam** - Direkte kommunikasjon via WhatsApp/email
- **Skolebesøk** - Spesialside for skoler som ønsker å besøke moskeen

### 🕌 Bønn & Tider
- **Bønnetid API** - Automatisk oppdaterte bønnetider
- **Bønnetid guide** - Instruksjoner for bønnetid apper
- **Ramadan kalender** - Komplett oversikt over Ramadan
- **Iftar countdown** - Live countdown til Iftar
- **Ramadan countdown** - Countdown til neste Ramadan

### 📚 Utdanning & Aktivitet
- **Quranskole for barn** - Opplegg, tider og påmelding
- **Styreintroduksjon** - Presentasjon av styremedlemmer

### 💰 Donasjoner
- **Donasjonsside** - Direktelenke og informasjon om donasjoner

---

## 🎨 Design & Fargepalett

### 🌙 Primærfarger
- **Emerald Green** `#1B5E20` - Symboliserer islam, ro, natur og åndelighet
- **Gold/Sand** `#D4AF37` - Gir varme, verdighet og en touch av luksus  
- **White** `#FFFFFF` - Renhet, enkelhet og kontrast

### 🕌 Sekundærfarger
- **Light Mint** `#C8E6C9` - Bakgrunn eller kort
- **Charcoal/Dark Slate** `#263238` - Tekstfarge på lys bakgrunn
- **Beige/Cream** `#F9F5EB` - Klassisk, varm stil som alternativ til hvitt

---

## 🏢 Organisasjon

**The Muslim Cultural Center Lillehammer**

| **Informasjon** | **Detaljer** |
|---|---|
| **Organisasjonsnummer** | 988 588 660 |
| **Postadresse** | Bankgata 12, 2609 LILLEHAMMER |
| **Kommune** | 3405 LILLEHAMMER, Norge |
| **Organisasjonsform** | Forening/lag/innretning |
| **Stiftelsesdato** | 1. januar 2005 |
| **Aktivitet** | Kulturelt senter |
| **Sist innsendt årsregnskap** | 2024 |

### 👥 Styre & Ledelse

| **Rolle** | **Navn** | **Født** |
|---|---|---|
| **Daglig leder** | Muhammad Talha Habib | 1986 |
| **Styrets leder** | Mukhtar Sharif Mukhtar | 1975 |
| **Nestleder** | Hossein Sharipovitsj Aldamov | 1976 |
| **Styremedlem** | Javaid Akhtar Sheikh | 1952 |
| **Styremedlem** | Ahmed Macalin Yahye | 1977 |
| **Styremedlem** | Muhammad Talha Habib | 1986 |

---

## 🚀 Anbefalt Tech Stack

### Frontend
- **Next.js 14** - React framework med App Router
- **TypeScript** - Type safety og bedre utvikleropplevelse
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animasjoner og overganger
- **React Hook Form** - Form håndtering
- **Zustand** - State management

### Backend & API
- **Next.js API Routes** - Serverless API endpoints
- **Prisma** - Database ORM
- **PostgreSQL** - Hoveddatabase
- **Vercel** - Hosting og deployment

### Eksterne Tjenester
- **Aladhan API** - Bønnetider for Norge
- **WhatsApp Business API** - Automatisert kommunikasjon
- **Stripe** - Donasjonshåndtering
- **Vercel Analytics** - Web analytics

### Utviklingsverktøy
- **ESLint + Prettier** - Code quality
- **Husky** - Git hooks
- **Jest + Testing Library** - Testing
- **Storybook** - Component development

---

## 📁 Prosjektstruktur

```
lillehammermoske/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── (pages)/        # Route groups
│   │   ├── api/            # API routes
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable components
│   │   ├── ui/            # Base UI components
│   │   └── features/      # Feature-specific components
│   ├── lib/               # Utilities and configurations
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   └── data/              # Static data and constants
├── public/                # Static assets
├── prisma/               # Database schema and migrations
├── docs/                 # Documentation
└── tests/                # Test files
```

---

## 🚀 Kom i gang

### Forutsetninger
- Node.js 18+ 
- npm eller yarn
- Git

### Installasjon

1. **Klon prosjektet**
   ```bash
   git clone <repository-url>
   cd lillehammermoske
   ```

2. **Installer avhengigheter**
   ```bash
   npm install
   ```

3. **Sett opp miljøvariabler**
   ```bash
   cp .env.example .env.local
   # Rediger .env.local med dine verdier
   ```

4. **Start utviklingsserveren**
   ```bash
   npm run dev
   ```

5. **Åpne i nettleseren**
   ```
   http://localhost:3000
   ```

### Tilgjengelige Scripts

| Script | Beskrivelse |
|--------|-------------|
| `npm run dev` | Starter utviklingsserveren |
| `npm run build` | Bygger prosjektet for produksjon |
| `npm run start` | Starter produksjonsserveren |
| `npm run lint` | Kjører ESLint |
| `npm run type-check` | Sjekker TypeScript typer |
| `npm test` | Kjører tester |
| `npm run db:generate` | Genererer Prisma klient |
| `npm run db:push` | Pusher database endringer |
| `npm run db:migrate` | Kjører database migrasjoner |

---

## 🏗️ Utvikling

### Komponentstruktur
- **UI Components** (`src/components/ui/`) - Gjenbrukbare grunnkomponenter
- **Feature Components** (`src/components/features/`) - Funksjonsspesifikke komponenter
- **Pages** (`src/app/(pages)/`) - Sidekomponenter

### Styling
- **Tailwind CSS** for styling
- **Custom CSS** i `globals.css` for globale stiler
- **Framer Motion** for animasjoner

### State Management
- **Zustand** for global state
- **React Hook Form** for form håndtering
- **Local state** med useState/useReducer

### API Integration
- **Aladhan API** for bønnetider
- **WhatsApp Business API** for meldinger
- **Stripe API** for donasjoner

---

## 📱 Funksjoner

### ✅ Implementert
- [x] Responsivt design
- [x] Navigasjon og layout
- [x] Hjemmeside med hero, bønnetider, om oss
- [x] Kunngjøringer system
- [x] Tjenester oversikt
- [x] TypeScript konfigurasjon
- [x] Tailwind CSS setup

### 🚧 Under utvikling
- [ ] Bønnetid API integrasjon
- [ ] Ramadan kalender
- [ ] Quranskole påmelding
- [ ] Donasjonssystem
- [ ] Kontaktskjema
- [ ] Admin panel

### 📋 Planlagt
- [ ] WhatsApp gruppe parser
- [ ] Bønnetid app
- [ ] Brukerautentisering
- [ ] Database integrasjon
- [ ] Email notifikasjoner
- [ ] Analytics

---

## 🎨 Design System

### Farger
```css
/* Primærfarger */
--emerald-900: #1B5E20
--gold-500: #D4AF37
--white: #FFFFFF

/* Sekundærfarger */
--mint-200: #C8E6C9
--charcoal-800: #263238
--cream-50: #F9F5EB
```

### Typografi
- **Hovedfont**: Inter (Google Fonts)
- **Arabisk font**: Amiri (Google Fonts)

### Komponenter
- **Buttons**: `btn-primary`, `btn-secondary`, `btn-outline`
- **Cards**: `card`, `card-hover`
- **Layout**: `container-custom`, `section-padding`

---

## 🔧 Konfigurasjon

### Miljøvariabler
Se `.env.example` for alle tilgjengelige miljøvariabler.

### Viktige innstillinger
- **Prayer Times**: Konfigureres i `src/lib/config.ts`
- **Organisasjon**: Oppdateres i `src/lib/config.ts`
- **Farger**: Defineres i `tailwind.config.js`

---

## 📚 Dokumentasjon

- **API Dokumentasjon**: `/docs/api.md`
- **Komponent Dokumentasjon**: `/docs/components.md`
- **Deployment Guide**: `/docs/deployment.md`

---

## 🤝 Bidrag

1. Fork prosjektet
2. Opprett en feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit endringene (`git commit -m 'Add some AmazingFeature'`)
4. Push til branchen (`git push origin feature/AmazingFeature`)
5. Åpne en Pull Request

---

## 📄 Lisens

Dette prosjektet er lisensiert under MIT-lisensen - se [LICENSE](LICENSE) filen for detaljer.

---

## 📞 Kontakt

**The Muslim Cultural Center Lillehammer**
- **Adresse**: Bankgata 12, 2609 Lillehammer
- **Email**: info@lillehammermoske.no
- **Organisasjonsnummer**: 988 588 660