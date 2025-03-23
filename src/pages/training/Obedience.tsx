
import TrainingLayout from "@/components/training/TrainingLayout";

const Obedience = () => {
  return (
    <TrainingLayout
      title="Obedience Training"
      subtitle="Build a strong foundation of obedience and communication with your dog."
      imageSrc="https://images.unsplash.com/photo-1469041797191-50ace28483c3"
      imageAlt="Dogs in obedience training"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Training Details</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Small group classes (max 6 dogs)</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>8-week program</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Weekly homework and practice guides</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>One-on-one evaluation session included</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Starting from 299 PLN</p>
        </div>
      }
    >
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
      
      <h2 className="text-2xl font-semibold mt-8">Why Obedience Matters</h2>
      <p>
        Basic obedience is the foundation of a harmonious relationship with your dog. It's not just about control - it's about communication, trust, and safety. A well-trained dog:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Can be safely included in more family activities</li>
        <li>Is less likely to develop behavioral problems</li>
        <li>Has clearer boundaries and understands expectations</li>
        <li>Builds confidence through successful learning</li>
        <li>Strengthens the bond with their human through positive training</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Our Methodology</h2>
      <p>
        We use positive reinforcement training techniques that reward good behavior rather than punishing mistakes. This approach creates a dog who wants to work with you and follows commands willingly and enthusiastically, not out of fear.
      </p>
    </TrainingLayout>
  );
};

export default Obedience;
