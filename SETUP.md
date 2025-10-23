# 🚀 Setup Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/lillehammermoske"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# External APIs
ALADHAN_API_URL="https://api.aladhan.com/v1"
ALADHAN_API_KEY=""

# WhatsApp Business API
WHATSAPP_API_URL=""
WHATSAPP_ACCESS_TOKEN=""
WHATSAPP_PHONE_NUMBER_ID=""

# Email
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASSWORD=""

# Stripe (for donations)
STRIPE_PUBLISHABLE_KEY=""
STRIPE_SECRET_KEY=""
STRIPE_WEBHOOK_SECRET=""

# Analytics
VERCEL_ANALYTICS_ID=""
GOOGLE_ANALYTICS_ID=""

# App Configuration
APP_NAME="Lillehammer Moske"
APP_URL="https://lillehammermoske.no"
APP_EMAIL="info@lillehammermoske.no"
APP_PHONE=""

# Prayer Times Configuration
PRAYER_TIMES_CITY="Lillehammer"
PRAYER_TIMES_COUNTRY="Norway"
PRAYER_TIMES_LATITUDE="61.1153"
PRAYER_TIMES_LONGITUDE="10.4663"
PRAYER_TIMES_METHOD="2" # 2 = Islamic Society of North America (ISNA)
```

## Fixed Issues

✅ **Next.js Configuration** - Removed invalid experimental options
✅ **Metadata Base** - Added metadataBase to fix Open Graph warnings  
✅ **PostCSS Config** - Added PostCSS configuration for Tailwind CSS
✅ **Security Vulnerabilities** - Updated Next.js to latest version
✅ **Dependencies** - All packages installed successfully
✅ **TypeScript** - Added next-env.d.ts file

## Development

The website should now load properly with:
- ✅ Responsive design
- ✅ Tailwind CSS styling
- ✅ TypeScript support
- ✅ No configuration errors
- ✅ All components working

## Next Steps

1. **Customize content** in `src/lib/config.ts`
2. **Add real data** for prayer times, announcements, etc.
3. **Set up database** with Prisma
4. **Configure APIs** for external services
5. **Deploy** to Vercel or your preferred platform
