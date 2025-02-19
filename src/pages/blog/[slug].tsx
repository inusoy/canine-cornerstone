
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Find current post and adjacent posts
  const currentPostIndex = blogPosts.findIndex(post => post.slug === slug);
  const currentPost = blogPosts[currentPostIndex];
  const previousPost = currentPostIndex > 0 ? blogPosts[currentPostIndex - 1] : null;
  const nextPost = currentPostIndex < blogPosts.length - 1 ? blogPosts[currentPostIndex + 1] : null;

  if (!currentPost) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-8 space-y-8">
              <img
                src={currentPost.image}
                alt={currentPost.title}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {currentPost.tags.map((tag, index) => (
                    <Link
                      key={index}
                      to={`/search?q=${encodeURIComponent(tag)}`}
                      className="px-3 py-1 bg-muted hover:bg-primary hover:text-primary-foreground text-sm rounded-full transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
                <h1 className="text-4xl font-semibold">{currentPost.title}</h1>
                <p className="text-muted-foreground">{currentPost.date}</p>
              </div>

              {/* Featured Quote */}
              <blockquote className="border-l-4 border-primary pl-4 my-8 italic text-xl">
                {currentPost.featuredQuote}
              </blockquote>

              <div className="prose max-w-none">
                {currentPost.content}
              </div>

              {/* Navigation between posts */}
              <div className="border-t border-b py-8 mt-16 grid grid-cols-2 gap-4">
                {previousPost && (
                  <Link
                    to={`/blog/${previousPost.slug}`}
                    className="group space-y-2"
                  >
                    <div className="flex items-center text-muted-foreground text-sm">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Previous Post
                    </div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {previousPost.title}
                    </p>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="group space-y-2 text-right ml-auto"
                  >
                    <div className="flex items-center justify-end text-muted-foreground text-sm">
                      Next Post
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {nextPost.title}
                    </p>
                  </Link>
                )}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="sticky top-24">
                {/* Instagram Embed */}
                <div className="bg-muted p-4 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Follow Us on Instagram</h3>
                  <div className="aspect-square bg-card rounded-lg">
                    {currentPost.instagramEmbed ? (
                      <div 
                        dangerouslySetInnerHTML={{ __html: currentPost.instagramEmbed }} 
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Instagram className="h-8 w-8 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Related Posts */}
                <div className="bg-card border rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4">Related Posts</h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(post => post.slug !== slug)
                      .slice(0, 3)
                      .map((post, index) => (
                        <Link
                          key={index}
                          to={`/blog/${post.slug}`}
                          className="block group"
                        >
                          <div className="flex items-start space-x-3">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div>
                              <h4 className="font-medium group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {post.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const blogPosts = [
  {
    title: "Understanding Your Dog's Body Language",
    date: "March 15, 2024",
    excerpt: "Learn to read and interpret your dog's subtle communication signals for better training results.",
    content: (
      <>
        <p>Dogs communicate primarily through body language, making it essential for owners to understand these subtle signals. By learning to read your dog's body language, you can better respond to their needs and improve your training results.</p>
        
        <h2>Key Body Language Signals</h2>
        <p>Your dog's tail position, ear movement, and facial expressions all convey important information about their emotional state. A wagging tail doesn't always indicate happiness - the position and speed of the wag can mean different things.</p>
        
        <h3>Tail Positions</h3>
        <ul>
          <li>High and stiff: alertness or potential aggression</li>
          <li>Relaxed and horizontal: calm and confident</li>
          <li>Low or tucked: submission or fear</li>
        </ul>
        
        <h3>Facial Expressions</h3>
        <p>Pay attention to your dog's eyes, ears, and mouth. Soft, almond-shaped eyes typically indicate a relaxed state, while hard staring can signal tension or threat. Yawning and lip-licking, when not tired or hungry, often indicate stress.</p>
        
        <h2>Using Body Language in Training</h2>
        <p>Understanding these signals allows you to adjust your training approach in real-time. If you notice stress signals, you can modify the difficulty level or take a break. This responsiveness builds trust and improves training outcomes.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    slug: "understanding-dog-body-language",
    tags: ["Training", "Behavior", "Communication"],
    featuredQuote: "A wagging tail doesn't always mean a happy dog - understanding the nuances of canine body language is key to better communication.",
    instagramEmbed: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C3UAq7AIUZ_/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><script async src="//www.instagram.com/embed.js"></script>',
  },
  {
    title: "Positive Reinforcement: A Guide for New Dog Owners",
    date: "March 10, 2024",
    excerpt: "Discover the power of positive reinforcement and how it can transform your dog's behavior.",
    content: (
      <>
        <p>Positive reinforcement is a powerful training technique that focuses on rewarding desired behaviors rather than punishing unwanted ones. This approach not only helps your dog learn new behaviors but also strengthens your bond.</p>
        
        <h2>The Science Behind Positive Reinforcement</h2>
        <p>When dogs receive rewards for specific behaviors, they're more likely to repeat those behaviors. This creates a positive association with training and makes learning new commands more enjoyable for your pet.</p>
        
        <h3>Choosing the Right Rewards</h3>
        <ul>
          <li>High-value treats for challenging tasks</li>
          <li>Verbal praise and petting</li>
          <li>Favorite toys for play motivation</li>
        </ul>
        
        <h2>Timing Is Everything</h2>
        <p>The key to effective positive reinforcement is timing. Rewards must be given immediately after the desired behavior to create a clear connection in your dog's mind.</p>
        
        <h3>Common Mistakes to Avoid</h3>
        <p>Don't reward unwanted behaviors accidentally, and maintain consistency in your training approach. Every family member should use the same commands and reward system.</p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    slug: "positive-reinforcement-guide",
    tags: ["Training", "Positive Reinforcement", "Beginner Tips"],
    featuredQuote: "The timing of rewards is crucial - they must be immediate to create a clear connection with the desired behavior.",
    instagramEmbed: '<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/C3mAL-7I4uR/" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"></blockquote><script async src="//www.instagram.com/embed.js"></script>',
  }
];

export default BlogPost;
