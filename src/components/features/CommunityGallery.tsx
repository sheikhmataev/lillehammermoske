'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EightPointStar } from '@/components/ui/ornaments';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/assets/images/mosque/entrance.png', alt: 'Moskeen utvendig', title: 'Inngangen' },
  { id: 2, src: '/assets/images/mosque/inside_image.png', alt: 'Bønnesal', title: 'Hovedbønnesal' },
  { id: 3, src: '/assets/images/mosque/inside2.png', alt: 'Fellesskapsområde', title: 'Fellesskapsområder' },
];

export function CommunityGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section className="band band-cream py-20 sm:py-28">
      <div className="container-custom relative px-4">
        <SectionHeading
          tone="cream"
          eyebrow="Bildegalleri"
          arabic="مسجدنا"
          title="Et glimt av moskéen"
          lead="Utforsk fasilitetene og fellesskapsområdene våre."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => openImage(image, index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-[#1B5E20]/10 shadow-[0_24px_60px_-35px_rgba(12,42,26,0.5)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={400}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06150d]/85 via-[#06150d]/10 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-left">
                <EightPointStar className="h-3.5 w-3.5 flex-shrink-0 text-[#E6C547]" />
                <span className="font-display text-lg font-semibold text-white">{image.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} title={selectedImage.title} size="xl">
          <div className="relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="mb-4 w-full rounded-lg"
            />
            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={prevImage}
                className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200"
                aria-label="Forrige bilde"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <span className="text-sm text-gray-600">
                {currentIndex + 1} av {galleryImages.length}
              </span>
              <button
                onClick={nextImage}
                className="rounded-lg bg-gray-100 p-2 transition-colors hover:bg-gray-200"
                aria-label="Neste bilde"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
