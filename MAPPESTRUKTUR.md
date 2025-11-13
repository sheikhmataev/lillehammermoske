# 📁 Mappestruktur for Assets

## ✅ Opprettet og organisert:

### 📊 CSV-filer (Bønnetider)
```
public/data/
├── Bonnetid_Lillehammer_2025-11.csv
└── Bonnetid_Lillehammer_2025-12.csv
```

### 🎨 Assets
```
public/assets/
├── logos/           # Logoer og merkevarer
├── images/
│   ├── board/       # Bilder av styremedlemmer
│   ├── mosque/      # Bilder av moskeen
│   ├── events/      # Arrangementbilder
│   └── gallery/     # Galleri bilder
├── icons/           # Ikoner og grafiske elementer
├── favicons/        # Favicon filer
├── README.md        # Dokumentasjon
└── EXAMPLES.md      # Eksempler og beste praksis
```

## 📝 Hvordan bruke:

### For nye bønnetider:
1. Last ned CSV-fil
2. Gi navn: `Bonnetid_Lillehammer_YYYY-MM.csv`
3. Legg i `/public/data/`

### For bilder:
- **Styret**: `/public/assets/images/board/[navn].jpg`
- **Moskebilder**: `/public/assets/images/mosque/[beskrivelse].jpg`
- **Arrangementer**: `/public/assets/images/events/[arrangement-år].jpg`
- **Galleri**: `/public/assets/images/gallery/[nummer].jpg`

### For logoer:
- **Hovedlogo**: `/public/assets/logos/lillehammer-moske-logo.svg`
- **Hvit logo**: `/public/assets/logos/lillehammer-moske-logo-white.svg`

## 🔗 Bruk i koden:
```tsx
// Bilder
<img src="/assets/images/board/board-navn.jpg" alt="Navn" />

// CSV-filer (hentes automatisk)
fetch('/data/Bonnetid_Lillehammer_2025-11.csv')

// Logoer
<img src="/assets/logos/lillehammer-moske-logo.svg" alt="Logo" />
```

Alle mapper er klare til bruk! 🚀
