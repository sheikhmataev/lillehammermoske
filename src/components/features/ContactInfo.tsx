export function ContactInfo() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-emerald-900 mb-6">Kontaktinformasjon</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Adresse</h4>
          <p className="text-gray-600">Bankgata 12, 2609 Lillehammer</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Telefon</h4>
          <p className="text-gray-600">Se mobilnummer</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">E-post</h4>
          <p className="text-gray-600">info@lillehammermoske.no</p>
        </div>
      </div>
    </div>
  );
}
