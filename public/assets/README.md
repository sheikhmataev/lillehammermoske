# Assets Mappestruktur

Dette er den organiserte mappestrukturen for alle assets i Lillehammer Moske nettsiden.

## 📁 Mappeoversikt

### `/public/data/`
Her ligger alle CSV-filer med bønnetider:
- `Bonnetid_Lillehammer_2025-11.csv` - Bønnetider for November 2025
- `Bonnetid_Lillehammer_2025-12.csv` - Bønnetider for Desember 2025

**Hvordan legge til nye bønnetider:**
1. Last ned nye CSV-filer fra islamic.no eller annen kilde
2. Gi filene navn i formatet: `Bonnetid_Lillehammer_YYYY-MM.csv`
3. Plasser dem i denne mappen
4. Oppdater `PrayerTimesService` for å inkludere de nye månedene

---

### `/public/assets/logos/`
Her ligger alle logoer og merkevarer:
- `moske-logo.svg` - Hovedlogo for moskeen
- `moske-logo-white.svg` - Hvit logo for mørke bakgrunner
- `favicon.ico` - Favicon for nettleser
- `apple-touch-icon.png` - iOS app ikon

---

### `/public/assets/images/board/`
Bilder av styremedlemmer og ledere:
- `board-[navn].jpg` - Profesjonelle bilder av styremedlemmer
- `leadership-[navn].jpg` - Bilder av lederteam

**Navnekonvensjon:**
- Bruk bindestrek og små bokstaver: `board-mohammed-ali.jpg`
- Bruk deskriptive navn som er enkle å forstå

---

### `/public/assets/images/mosque/`
Bilder av moskeen og fasiliteter:
- `exterior.jpg` - Utsiden av moskeen
- `interior-prayer-hall.jpg` - Bønnerommet
- `interior-wudu-area.jpg` - Wudu-området
- `classroom.jpg` - Klasserom for Quranskole
- `entrance.jpg` - Inngangsparti

---

### `/public/assets/images/events/`
Bilder fra arrangementer og aktiviteter:
- `ramadan-2024.jpg` - Ramadan iftar
- `eid-celebration.jpg` - Eid feiring
- `quran-school-graduation.jpg` - Avgangseremoni
- `community-gathering.jpg` - Fellesskapsarrangementer

**Tips for arrangementer:**
- Bruk dato i filnavn: `ramadan-2024-iftar.jpg`
- Organiser med beskrivende navn

---

### `/public/assets/images/gallery/`
Generelle bilder for bildegalleriet på forsiden:
- `gallery-[nummer].jpg` - Rotasjon av bilder for galleriet
- Bruk høykvalitets bilder som viser moskeens aktiviteter

---

### `/public/assets/icons/`
Ikoner og grafiske elementer:
- `prayer-times.svg` - Ikon for bønnetider
- `quran.svg` - Ikon for Quranskole
- `donation.svg` - Ikon for donasjon
- Tilpassede ikoner for spesifikke funksjoner

---

### `/public/assets/favicons/`
Favicon-filer for ulike plattformer:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `android-chrome-192x192.png`
- `apple-touch-icon.png`

## 📝 Viktige Regler

### Bildekrav:
- **Format**: Bruk WebP for bedre ytelse, JPG for bilder
- **Størrelse**: Komprimer bilder for raskere lasting
- **Navngiving**: Bruk små bokstaver, bindestrek, ingen mellomrom
- **Alt-text**: Husk å legge til beskrivende alt-text i koden

### CSV-filer:
- **Format**: UTF-8 encoding
- **Struktur**: Samme format som eksisterende filer
- **Navngiving**: `Bonnetid_Lillehammer_YYYY-MM.csv`

### Organisering:
- Hold mapper ryddige og organiserte
- Slett gamle/ubrukte filer
- Bruk versjonskontroll for viktige filer

## 🔗 Hvordan Bruke i Kode

### Bilder:
```tsx
// For bilder i assets-mappen
<img src="/assets/images/mosque/exterior.jpg" alt="Utsiden av Lillehammer Moske" />

// For board bilder
<img src="/assets/images/board/board-navn.jpg" alt="Navn Navnesen, Styremedlem" />
```

### CSV-filer:
```tsx
// CSV-filer lastes automatisk av PrayerTimesService
// Filene ligger i /data/ mappen (uten /public/ i stien)
fetch('/data/Bonnetid_Lillehammer_2025-11.csv')
```

### Ikoner:
```tsx
// For ikoner
<img src="/assets/icons/prayer-times.svg" alt="Bønnetider" />
```

---

## 📧 Kontakt
Har du spørsmål om filorganisering eller trenger hjelp med å legge til nye assets?
Kontakt utvikleren eller sjekk dokumentasjonen i `docs/` mappen.
