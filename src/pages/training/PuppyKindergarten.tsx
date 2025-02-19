
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PuppyKindergarten = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-6">Puppy Kindergarten</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Give your puppy the best start in life with early socialization and training.
        </p>
        <div className="prose max-w-none">
          <img
            src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
            alt="Puppies in training"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="space-y-4">
            <p>
              Our puppy kindergarten program is designed to help young dogs develop
              crucial social skills and basic obedience in a safe, controlled
              environment.
            </p>
            <h2 className="text-2xl font-semibold mt-8">Program Benefits</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Early socialization</li>
              <li>Basic manners and commands</li>
              <li>Bite inhibition</li>
              <li>Confidence building</li>
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link to="/contact">Register Your Puppy</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyKindergarten;
