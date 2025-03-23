
import TrainingLayout from "@/components/training/TrainingLayout";

const SocialisationWalks = () => {
  return (
    <TrainingLayout
      title="Socialisation Walks"
      subtitle="Structured group walks to help your dog develop social skills and confidence."
      imageSrc="https://images.unsplash.com/photo-1487252665478-49b61b47f302"
      imageAlt="Dogs on socialisation walk"
      sidebarContent={
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">Walk Information</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>4-week schedule</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Maximum 4 dogs per group</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Different locations each week</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>Suitable for dogs 6 months and older</span>
            </li>
          </ul>
          <p className="font-semibold text-primary">Starting from 149 PLN</p>
        </div>
      }
    >
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
      
      <h2 className="text-2xl font-semibold mt-8">Why Group Walks Matter</h2>
      <p>
        Social walks offer benefits that individual walks simply can't provide:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Learning appropriate greetings with other dogs</li>
        <li>Practicing focus around distractions</li>
        <li>Building confidence in various environments</li>
        <li>Improving leash manners in real-world settings</li>
        <li>Monitored socialization with professional guidance</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Walk Locations</h2>
      <p>
        Each week, we visit a different environment to provide varied experiences:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Week 1:</strong> Urban park walk with moderate distractions</li>
        <li><strong>Week 2:</strong> Nature trail with natural obstacles</li>
        <li><strong>Week 3:</strong> Urban environment with traffic and pedestrians</li>
        <li><strong>Week 4:</strong> Mixed environment with various challenges</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8">Requirements</h2>
      <p>
        To participate in our socialization walks, we require:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Up-to-date vaccinations</li>
        <li>Basic leash manners</li>
        <li>Non-aggressive behavior toward people</li>
        <li>A proper-fitting harness or collar</li>
        <li>A standard 6-foot leash (no retractable leashes)</li>
      </ul>
    </TrainingLayout>
  );
};

export default SocialisationWalks;
