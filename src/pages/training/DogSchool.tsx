
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DogSchool = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-6">Dog School</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Comprehensive training programs for dogs of all ages and skill levels.
          </p>
          <div className="prose max-w-none">
            <img
              src="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
              alt="Dog school training"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <div className="space-y-4">
              <p>
                Our dog school provides structured learning environments where dogs can
                develop essential skills while having fun and socializing with others.
              </p>
              <h2 className="text-2xl font-semibold mt-8">Program Features</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Small group classes</li>
                <li>Individual attention</li>
                <li>Progressive skill development</li>
                <li>Real-world practice scenarios</li>
              </ul>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/contact">Enroll Now</Link>
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

export default DogSchool;
