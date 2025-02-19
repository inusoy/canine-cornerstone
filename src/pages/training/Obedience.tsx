
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Obedience = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-semibold mb-6">Obedience Training</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Build a strong foundation of obedience and communication with your dog.
        </p>
        <div className="prose max-w-none">
          <img
            src="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
            alt="Dogs in obedience training"
            className="w-full h-64 object-cover rounded-lg mb-8"
          />
          <div className="space-y-4">
            <p>
              Our comprehensive obedience program focuses on developing reliable
              responses to commands while strengthening the bond between you and
              your dog.
            </p>
            <h2 className="text-2xl font-semibold mt-8">Core Commands</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sit, Stay, and Come</li>
              <li>Loose-leash walking</li>
              <li>Leave it and Drop it</li>
              <li>Off-leash reliability</li>
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link to="/contact">Start Training</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Obedience;
