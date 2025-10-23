import { Mail, Phone, Calendar } from 'lucide-react';

const boardMembers = [
  {
    id: 1,
    name: 'Mukhtar Sharif Mukhtar',
    position: 'Styrets Leder',
    birthYear: 1975,
    email: 'mukhtar@lillehammermoske.no',
    phone: '+47 123 45 678',
    image: '/images/board/mukhtar.jpg',
    bio: 'Har ledet styret siden 2018 og jobber aktivt for å styrke det muslimske fellesskapet i Lillehammer.',
  },
  {
    id: 2,
    name: 'Hossein Sharipovitsj Aldamov',
    position: 'Nestleder',
    birthYear: 1976,
    email: 'hossein@lillehammermoske.no',
    phone: '+47 123 45 679',
    image: '/images/board/hossein.jpg',
    bio: 'Nestleder siden 2020 med fokus på utdanning og ungdomsaktiviteter.',
  },
  {
    id: 3,
    name: 'Muhammad Talha Habib',
    position: 'Daglig Leder',
    birthYear: 1986,
    email: 'talha@lillehammermoske.no',
    phone: '+47 123 45 680',
    image: '/images/board/talha.jpg',
    bio: 'Daglig leder som koordinerer daglige aktiviteter og administrasjon.',
  },
  {
    id: 4,
    name: 'Javaid Akhtar Sheikh',
    position: 'Styremedlem',
    birthYear: 1952,
    email: 'javaid@lillehammermoske.no',
    phone: '+47 123 45 681',
    image: '/images/board/javaid.jpg',
    bio: 'Erfaren styremedlem med lang historie i det muslimske fellesskapet.',
  },
  {
    id: 5,
    name: 'Ahmed Macalin Yahye',
    position: 'Styremedlem',
    birthYear: 1977,
    email: 'ahmed@lillehammermoske.no',
    phone: '+47 123 45 682',
    image: '/images/board/ahmed.jpg',
    bio: 'Styremedlem med fokus på fellesskapsutvikling og kultur.',
  },
];

export function BoardMembers() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Styret
            </h2>
            <p className="text-xl text-gray-600">
              Møt de dedikerte menneskene som leder Lillehammer Moske.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <div key={member.id} className="card-hover">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-900 to-gold-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold-500 font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500">
                    Født {member.birthYear}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="w-4 h-4 mr-3 text-emerald-900" />
                    <a 
                      href={`mailto:${member.email}`}
                      className="hover:text-emerald-900 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-3 text-emerald-900" />
                    <a 
                      href={`tel:${member.phone}`}
                      className="hover:text-emerald-900 transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Board Meeting Info */}
          <div className="mt-16 bg-gradient-to-r from-emerald-900 to-emerald-800 rounded-2xl p-8 text-white">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 text-center">
                Styrets Møter
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Calendar className="w-6 h-6 mr-3" />
                    Møtefrekvens
                  </h4>
                  <p className="text-gray-200 mb-4">
                    Styrets møter holdes månedlig, vanligvis første lørdag i måneden.
                  </p>
                  <p className="text-gray-200">
                    Alle medlemmer er velkommen til å delta på styremøtene.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4">
                    Kontakt Styret
                  </h4>
                  <p className="text-gray-200 mb-4">
                    Har du spørsmål eller forslag til styret? Ta kontakt med oss.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="mailto:styret@lillehammermoske.no"
                      className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Send e-post
                    </a>
                    <a 
                      href="/contact"
                      className="border-2 border-white text-white hover:bg-white hover:text-emerald-900 px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Kontaktskjema
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
