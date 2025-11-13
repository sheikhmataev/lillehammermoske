'use client';

import { EtherealShadowDemo, MosqueHeroWithShadow, SubtleEtherealBackground } from '@/components/ui/EtherealShadowDemo';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function EtherealDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation placeholder */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold text-emerald-900">Lillehammer Moske - Demo</h1>
          <Button variant="outline" onClick={() => window.history.back()}>
            Tilbake
          </Button>
        </div>
      </nav>

      {/* Main Demo */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-emerald-900 mb-4">
              Ethereal Shadow Komponent Demo
            </h2>
            <p className="text-lg text-gray-600">
              Demonstrasjon av den nye animerte bakgrunnskomponenten tilpasset moske-designet
            </p>
          </div>

          {/* Full Screen Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">
              Full Skjerm Demo
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <EtherealShadowDemo />
            </div>
          </div>

          {/* Hero Section Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">
              Hero Sekjon Demo
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <MosqueHeroWithShadow />
            </div>
          </div>

          {/* Subtle Background Demo */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-6 text-center">
              Subtittel Bakgrunn Demo
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <SubtleEtherealBackground>
                <div className="space-y-4">
                  <h4 className="text-2xl font-bold text-emerald-900">
                    Med Subtittel Bakgrunn
                  </h4>
                  <p className="text-gray-700 max-w-md mx-auto">
                    Dette viser hvordan komponenten kan brukes som en subtil bakgrunn 
                    for andre seksjoner på nettsiden.
                  </p>
                </div>
              </SubtleEtherealBackground>
            </div>
          </div>

          {/* Usage Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card variant="elevated">
              <h4 className="text-lg font-semibold text-emerald-900 mb-3">
                Full Skjerm Effekt
              </h4>
              <p className="text-gray-600 mb-4">
                Perfekt for landingssider eller hero seksjoner med maksimal visuell effekt.
              </p>
              <div className="text-sm text-gray-500">
                Animation: Medium (50, 60)
                <br />
                Noise: Subtle (0.3, 1.0)
              </div>
            </Card>

            <Card variant="elevated">
              <h4 className="text-lg font-semibold text-emerald-900 mb-3">
                Hero Sekjon
              </h4>
              <p className="text-gray-600 mb-4">
                Ideell for toppseksjoner med moderat animasjon og profesjonelt utseende.
              </p>
              <div className="text-sm text-gray-500">
                Animation: Gentle (30, 40)
                <br />
                Noise: Minimal (0.2, 0.8)
              </div>
            </Card>

            <Card variant="elevated">
              <h4 className="text-lg font-semibold text-emerald-900 mb-3">
                Subtittel Bakgrunn
              </h4>
              <p className="text-gray-600 mb-4">
                Diskret bakgrunnseffekt for innholdsseksjoner uten å forstyrre lesbarhet.
              </p>
              <div className="text-sm text-gray-500">
                Animation: Very Gentle (20, 80)
                <br />
                Noise: Very Subtle (0.1, 1.5)
              </div>
            </Card>
          </div>

          {/* Implementation Guide */}
          <div className="mt-16 bg-emerald-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-emerald-900 mb-6">
              Implementering Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-3">
                  Import og Bruk
                </h4>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
{`import { EtherealShadow } from '@/components/ui/EtherealShadow';

<EtherealShadow
  color="rgba(16, 185, 129, 0.08)"
  animation={{ scale: 50, speed: 60 }}
  noise={{ opacity: 0.3, scale: 1.0 }}
  sizing="fill"
  className="w-full h-full"
>
  <DittInnhold />
</EtherealShadow>`}
                </pre>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-emerald-900 mb-3">
                  Tilpassing
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>color:</strong> Endre farge for å matche tema</li>
                  <li>• <strong>animation:</strong> Juster scale (1-100) og speed (1-100)</li>
                  <li>• <strong>noise:</strong> Kontroller støy-effekt med opacity og scale</li>
                  <li>• <strong>sizing:</strong> &apos;fill&apos; eller &apos;stretch&apos; for mask-størrelse</li>
                  <li>• <strong>className:</strong> Bruk Tailwind for styling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
