
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const SocialisationWalks = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-6">Socialisation Walks</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Structured group walks to help your dog develop social skills and confidence.
          </p>
          <div className="prose max-w-none">
            <img
              src="https://images.unsplash.com/photo-1487252665478-49b61b47f302"
              alt="Dogs on socialisation walk"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <div className="space-y-4">
              <p>
                Our socialisation walks provide a controlled environment for dogs to
                interact with others while learning proper walking manners and social
                etiquette.
              </p>
              <h2 className="text-2xl font-semibold mt-8">Walk Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional supervision</li>
                <li>Small groups for safety</li>
                <li>Various environments</li>
                <li>Behavior monitoring</li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Join a Walk</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SocialisationWalks;
