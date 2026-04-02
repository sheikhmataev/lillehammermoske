import { Users, Heart, CheckCircle, ArrowRight } from 'lucide-react';

const GOOGLE_FORM_URL = 'https://forms.gle/XFiqQsontqLdpiMP9';

export function JoinCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-white">
      <div className="container-custom px-4">
        <div className="max-w-4xl mx-auto">
          {/* Mobile: Stacked layout */}
          <div className="space-y-12 md:hidden">
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-1.5 mb-6">
                <Users className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 font-medium text-xs uppercase tracking-wider">Bli en del av oss</span>
              </div>

              <h2 className="text-3xl font-extrabold mb-4 leading-tight">
                Bli medlem av <br className="sm:hidden" /><span className="text-gold-400">Lillehammer Moske</span>
              </h2>

              <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                Meld deg inn og vær med på å styrke fellesskapet vårt. Som medlem støtter du moskeens arbeid og aktiviteter.
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3 mb-8">
              {[
                'Støtt moskeens drift og aktiviteter',
                'Delta i beslutningsprosesser',
                'Bygg nettverk med fellesskapet',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-emerald-100">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-dark text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  boxShadow: '0 4px 24px rgba(212,175,55,0.3)',
                }}
              >
                Meld deg inn nå
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Decorative card */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gold-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Heart className="w-8 h-8 text-gold-400" />
                </div>
                <p className="font-arabic text-2xl text-gold-400 mb-4">
                  وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
                </p>
                <p className="text-emerald-100 text-base italic leading-relaxed mb-2">
                  &laquo;Og hjelp hverandre til godhet og gudsfrykt.&raquo;
                </p>
                <p className="text-emerald-300 text-sm font-medium">— Surah Al-Ma&apos;idah (5:2)</p>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>

          {/* Desktop: Side-by-side layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/30 rounded-full px-5 py-1.5 mb-6">
                <Users className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 font-medium text-xs uppercase tracking-wider">Bli en del av oss</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
                Bli medlem av <span className="text-gold-400">Lillehammer Moske</span>
              </h2>

              <p className="text-emerald-100 text-lg leading-relaxed mb-6">
                Meld deg inn og vær med på å styrke fellesskapet vårt. Som medlem støtter du moskeens arbeid og aktiviteter.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Støtt moskeens drift og aktiviteter',
                  'Delta i beslutningsprosesser',
                  'Bygg nettverk med fellesskapet',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-emerald-100">
                    <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-dark text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #D4AF37 0%, #B8941F 100%)',
                  boxShadow: '0 4px 24px rgba(212,175,55,0.3)',
                }}
              >
                Meld deg inn nå
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Right — Decorative card */}
            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-gold-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Heart className="w-8 h-8 text-gold-400" />
                </div>
                <p className="font-arabic text-2xl text-gold-400 mb-4">
                  وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
                </p>
                <p className="text-emerald-100 text-base italic leading-relaxed mb-2">
                  &laquo;Og hjelp hverandre til godhet og gudsfrykt.&raquo;
                </p>
                <p className="text-emerald-300 text-sm font-medium">— Surah Al-Ma&apos;idah (5:2)</p>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
