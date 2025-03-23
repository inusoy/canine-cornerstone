
import TrainingLayout from "@/components/training/TrainingLayout";

const PuppyKindergarten = () => {
  return (
    <TrainingLayout
      title="Psie Przedszkole"
      subtitle="Give your puppy the best start in life with early socialization and training."
      imageSrc="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1"
      imageAlt="Puppies in training"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Program Info</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>6-week puppy program</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>For puppies 8-20 weeks old</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maximum 6 puppies per class</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Puppy socialization playtime included</span>
            </li>
          </ul>
          <div className="p-3 bg-muted rounded-md">
            <p className="font-semibold text-primary mb-1">Special Offer:</p>
            <p className="text-sm">15% discount if booked before May 1, 2024</p>
          </div>
          <p className="font-semibold text-primary">Starting from 249 PLN</p>
        </div>
      }
    >
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
      
      <h2 className="text-2xl font-semibold mt-8">The Critical Period</h2>
      <p>
        The first few months of a puppy's life represent a critical socialization period. During this time, puppies are most receptive to new experiences and learning. Our puppy kindergarten takes advantage of this developmental stage to:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Expose puppies to various sights, sounds, and textures in a positive way</li>
        <li>Introduce controlled interaction with other puppies and people</li>
        <li>Begin foundation training that will carry throughout their lives</li>
        <li>Address and prevent common behavior problems before they start</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">What We Cover</h2>
      <p>
        Each week focuses on a different aspect of puppy development:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Week 1:</strong> Introduction and basic attention exercises</li>
        <li><strong>Week 2:</strong> Handling and grooming acceptance</li>
        <li><strong>Week 3:</strong> Basic commands: sit, down, and come</li>
        <li><strong>Week 4:</strong> Leash walking basics</li>
        <li><strong>Week 5:</strong> Problem prevention (jumping, nipping, etc.)</li>
        <li><strong>Week 6:</strong> Environmental challenges and confidence building</li>
      </ul>
    </TrainingLayout>
  );
};

export default PuppyKindergarten;
