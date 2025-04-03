
import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SpotkaniaP = () => {
  const [instagramPosts, setInstagramPosts] = useState<Array<{url: string, description: string}>>([
    {
      url: "https://www.instagram.com/p/C5FIjyUo-Zs/embed",
      description: "Spacer po Parku Grabiszyńskim z naszymi czworonogami! Świetna okazja do socjalizacji i wspólnej zabawy."
    },
    {
      url: "https://www.instagram.com/p/C4y4xpfo9kt/embed",
      description: "Trening grupowy przy Hali Stulecia. Uczyliśmy się podstawowych komend i dobrej komunikacji z psami."
    }
  ]);

  const [newPostUrl, setNewPostUrl] = useState("");
  const [newPostDescription, setNewPostDescription] = useState("");

  const handleAddPost = () => {
    if (newPostUrl.trim() !== "") {
      // Convert standard Instagram URL to embed URL if needed
      let embedUrl = newPostUrl;
      if (!embedUrl.includes('/embed') && embedUrl.includes('instagram.com/p/')) {
        embedUrl = `${embedUrl.split('?')[0]}/embed`;
      }
      
      setInstagramPosts([
        ...instagramPosts,
        {
          url: embedUrl,
          description: newPostDescription
        }
      ]);
      setNewPostUrl("");
      setNewPostDescription("");
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bryndan mb-6 text-primary text-center uppercase">
            Spotkania Psiarzy
          </h1>
          <p className="text-lg text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Tutaj znajdziesz informacje o naszych regularnych spotkaniach, spacerach i treningach grupowych.
            Dołącz do naszej społeczności psiarzy i spędź miło czas ze swoim pupilem!
          </p>

          <div className="max-w-4xl mx-auto mb-12 p-6 bg-card rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Dodaj nowy post</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="post-url" className="block text-sm font-medium mb-1">
                  URL posta na Instagramie
                </label>
                <Input
                  id="post-url"
                  value={newPostUrl}
                  onChange={(e) => setNewPostUrl(e.target.value)}
                  placeholder="https://www.instagram.com/p/XXXXXX/"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="post-description" className="block text-sm font-medium mb-1">
                  Opis spotkania
                </label>
                <Textarea
                  id="post-description"
                  value={newPostDescription}
                  onChange={(e) => setNewPostDescription(e.target.value)}
                  placeholder="Opisz spotkanie..."
                  className="w-full min-h-[100px]"
                />
              </div>
              <Button onClick={handleAddPost} className="w-full">Dodaj post</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {instagramPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="instagram-post-container">
                  <iframe
                    src={post.url}
                    className="w-full aspect-square border-0 overflow-hidden"
                    frameBorder="0"
                    scrolling="no"
                    allowTransparency={true}
                    title={`Instagram post ${index}`}
                  ></iframe>
                </div>
                <CardContent className="p-4">
                  <p>{post.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">Dołącz do naszych spotkań!</h2>
            <p className="text-lg mb-6">
              Organizujemy regularne spotkania w różnych parkach i miejscach przyjaznych psom we Wrocławiu.
              Śledź nasze media społecznościowe, aby być na bieżąco z nadchodzącymi wydarzeniami.
            </p>
            <Button asChild size="lg" className="mr-4">
              <a href="https://www.instagram.com/szczekszczekwroclaw/" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://www.facebook.com/profile.php?id=100089173953561" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpotkaniaP;
