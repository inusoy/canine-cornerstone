
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { services } from "@/components/ServicesSection";
import { blogPosts } from "@/pages/blog/[slug]";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filter services
  const matchedServices = services.filter(
    (service) =>
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
  );

  // Filter blog posts
  const matchedPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
      post.content.toString().toLowerCase().includes(query)
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-8">
            Search Results for "{query}"
          </h1>

          {matchedServices.length === 0 && matchedPosts.length === 0 && (
            <p className="text-muted-foreground">
              No results found. Try a different search term.
            </p>
          )}

          {matchedServices.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Training Programs</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {matchedServices.map((service) => (
                  <Link
                    key={service.link}
                    to={service.link}
                    className="block p-6 bg-card hover:bg-muted rounded-lg transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                    <p className="text-primary font-semibold mt-2">
                      {service.price}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {matchedPosts.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Blog Posts</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {matchedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="block bg-card hover:bg-muted rounded-lg overflow-hidden transition-colors"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Link
                            key={tag}
                            to={`/search?q=${encodeURIComponent(tag)}`}
                            className="text-sm bg-muted px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {tag}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
