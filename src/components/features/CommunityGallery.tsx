'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: 'facilities' | 'events' | 'community' | 'education';
}

// Real mosque images
const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/lillehammermoske/assets/images/mosque/entrance.png',
    alt: 'Moskeen utvendig',
    title: 'Lillehammer Moske - Inngang',
    category: 'facilities',
  },
  {
    id: 2,
    src: '/lillehammermoske/assets/images/mosque/inside_image.png',
    alt: 'Bønnesal',
    title: 'Hovedbønnesal',
    category: 'facilities',
  },
  {
    id: 3,
    src: '/lillehammermoske/assets/images/mosque/inside2.png',
    alt: 'Fellesskapsområde',
    title: 'Fellesskapsområder',
    category: 'community',
  },
];

const categoryColors = {
  facilities: 'bg-emerald-100 text-emerald-900',
  events: 'bg-blue-100 text-blue-900',
  community: 'bg-gold-100 text-gold-900',
  education: 'bg-purple-100 text-purple-900',
};

const categoryLabels = {
  facilities: 'Fasiliteter',
  events: 'Arrangementer',
  community: 'Fellesskap',
  education: 'Utdanning',
};

export function CommunityGallery() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | GalleryImage['category']>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-mint-200 to-cream-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
            Bildegalleri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Utforsk våre fasiliteter, arrangementer og fellesskapsaktiviteter gjennom bildene våre.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: 'Alle', count: galleryImages.length },
            { key: 'facilities', label: 'Fasiliteter', count: galleryImages.filter(img => img.category === 'facilities').length },
            { key: 'events', label: 'Arrangementer', count: galleryImages.filter(img => img.category === 'events').length },
            { key: 'community', label: 'Fellesskap', count: galleryImages.filter(img => img.category === 'community').length },
            { key: 'education', label: 'Utdanning', count: galleryImages.filter(img => img.category === 'education').length },
          ].map((category) => (
            <button
              key={category.key}
              onClick={() => setSelectedCategory(category.key as any)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                selectedCategory === category.key
                  ? 'bg-emerald-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openImage(image, index)}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300"
            >
              <Image 
                src={image.src}
                alt={image.alt}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4">
                  <p className="font-semibold mb-2">{image.title}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${categoryColors[image.category]}`}>
                    {categoryLabels[image.category]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <Modal
            isOpen={!!selectedImage}
            onClose={closeImage}
            title={selectedImage.title}
            size="xl"
          >
            <div className="relative">
              <Image 
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full rounded-lg mb-4"
              />
              
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Forrige bilde"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <span className="text-sm text-gray-600">
                  {currentIndex + 1} av {filteredImages.length}
                </span>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  aria-label="Neste bilde"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
}


