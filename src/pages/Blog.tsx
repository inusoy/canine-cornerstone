
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-12 text-center">Training Tips & Stories</h1>
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle>{post.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary hover:underline"
                  >
                    Read more →
                  </Link>
                </CardContent>
              </Card>
            ))}
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
    excerpt:
      "Learn to read and interpret your dog's subtle communication signals for better training results.",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
    slug: "understanding-dog-body-language",
  },
  {
    title: "Positive Reinforcement: A Guide for New Dog Owners",
    date: "March 10, 2024",
    excerpt:
      "Discover the power of positive reinforcement and how it can transform your dog's behavior.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    slug: "positive-reinforcement-guide",
  },
];

export default Blog;
