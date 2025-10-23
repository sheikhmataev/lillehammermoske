export function MapLocation() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Finn Oss
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Interaktivt kart med vår lokasjon
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6">Finn Oss</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!4v1761236092080!6m8!1m7!1ssLSGmqX8nU14EaK5FSGtdQ!2m2!1d61.1143942051249!2d10.46785348861282!3f235.2130591569735!4f-14.18229687808244!5f0.7820865974627469" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lillehammer Moske Lokasjon"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                <strong>Adresse:</strong> Bankgata 12, 2609 Lillehammer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
