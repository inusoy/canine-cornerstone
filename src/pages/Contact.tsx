
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold mb-6 text-center">Contact Us</h1>
          <Card className="p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 rounded-md border border-input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 rounded-md border border-input"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Training Program
                </label>
                <select className="w-full p-2 rounded-md border border-input">
                  <option value="">Select a program</option>
                  <option value="nosework">Nosework</option>
                  <option value="obedience">Obedience</option>
                  <option value="dog-school">Dog School</option>
                  <option value="puppy-kindergarten">Puppy Kindergarten</option>
                  <option value="socialisation-walks">Socialisation Walks</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  className="w-full p-2 rounded-md border border-input h-32"
                  placeholder="Tell us about your dog and your training goals"
                />
              </div>
              <Button className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
