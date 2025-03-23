
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Nosework = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-6">Nosework Training</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Nosework jest sportem kynologicznym, zainspirowanym pracą psów w służbach np. przy detekcji materiałów wybuchowych lub narkotyków, poszukiwaniu ludzi czy udaremnianiu przemytów egzotycznych zwierząt. Nosework opiera się na naturalnej psiej zdolności i potrzebie - węszeniu. Jest aktywnością, w której pies musi wyszukać i oznaczyć wyuczone wcześniej zapachy. W Polsce przyjęły się: cynamon, goździki i skórka pomarańczy.
          </p>
          <div className="prose max-w-none">
            <img
              src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
              alt="Dog doing nosework"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <div className="space-y-4">
              <p>
                Our nosework program helps dogs develop their natural scenting abilities
                while building confidence and mental stimulation. Perfect for all breeds
                and activity levels.
              </p>
              <h2 className="text-2xl font-semibold mt-8">What You'll Learn</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Foundation scent detection skills</li>
                <li>Search patterns and techniques</li>
                <li>Building drive and motivation</li>
                <li>Advanced search scenarios</li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Book a Session</Link>
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

export default Nosework;
