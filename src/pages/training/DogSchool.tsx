
import TrainingLayout from "@/components/training/TrainingLayout";

const DogSchool = () => {
  return (
    <TrainingLayout
      title="Dog School"
      subtitle="Comprehensive training programs for dogs of all ages and skill levels."
      imageSrc="https://images.unsplash.com/photo-1582562124811-c09040d0a901"
      imageAlt="Dog school training"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Program Details</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>12-week comprehensive program</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maximum 8 dogs per group</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Progress reports and evaluations</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Training guidebook included</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Starting from 349 PLN</p>
        </div>
      }
    >
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
      
      <h2 className="text-2xl font-semibold mt-8">Curriculum</h2>
      <p>
        Our dog school curriculum is designed to provide a comprehensive education for your dog, covering all aspects of behavior and obedience:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Weeks 1-4:</strong> Basic commands, focus work, and leash skills</li>
        <li><strong>Weeks 5-8:</strong> Intermediate commands, distraction training, and socialization</li>
        <li><strong>Weeks 9-12:</strong> Advanced skills, distance work, and real-world application</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">What to Bring</h2>
      <p>
        For the best experience in our dog school, please bring:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>A well-fitting collar or harness</li>
        <li>A 6-foot leash (no retractable leashes)</li>
        <li>Your dog's favorite treats and toys</li>
        <li>A training clicker (optional)</li>
        <li>Water and bowl for your dog</li>
      </ul>
    </TrainingLayout>
  );
};

export default DogSchool;
