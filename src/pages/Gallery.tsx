
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1568393691622-c7ba131d63b4",
    alt: "Psy w sali zabaw",
    title: "Sala Zabaw"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1535868647677-300dbf3d78d1",
    alt: "Szkolenie psa",
    title: "Psia Szkółka"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    alt: "Pies uczestniczący w treningu Nosework",
    title: "Nosework"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d",
    alt: "Spacer socjalizacyjny",
    title: "Spacery Socjalizacyjne"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1537204696486-967f1b7198c8",
    alt: "Trening indywidualny",
    title: "Indywidualne Treningi"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0",
    alt: "Konsultacja behawioralna",
    title: "Konsultacje Behawioralne"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
    alt: "Psy podczas zabawy",
    title: "Zabawy grupowe"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1549291981-56d443d5e2a2",
    alt: "Sesja treningowa",
    title: "Trening posłuszeństwa"
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
