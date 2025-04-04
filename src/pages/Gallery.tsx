
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "gallery/1.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 2,
    src: "gallery/2.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 3,
    src: "gallery/3.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 4,
    src: "gallery/4.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 5,
    src: "gallery/5.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 6,
    src: "gallery/6.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 7,
    src: "gallery/7.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 8,
    src: "gallery/8.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 9,
    src: "gallery/9.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 10,
    src: "gallery/10.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 11,
    src: "gallery/11.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
  {
    id: 12,
    src: "gallery/12.jpg",
    alt: "Heban szczeniaczek",
    title: "Heban szczeniaczek"
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-12 text-center">Galeria</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image) => (
              <Card 
                key={image.id} 
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedImage(image)}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <p className="text-white font-medium">{image.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedImage && (
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
                <h3 className="text-xl font-medium">{selectedImage.title}</h3>
                <p className="text-sm text-white/80">{selectedImage.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default Gallery;
