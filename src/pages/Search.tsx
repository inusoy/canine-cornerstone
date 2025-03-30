
import { useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { allProducts } from "@/data/products";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filter products
  const matchedProducts = allProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
  );

  return (
    <>
      <Navigation />
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-8">
            Wyniki wyszukiwania dla "{query}"
          </h1>

          {matchedProducts.length === 0 && (
            <p className="text-muted-foreground">
              Brak wyników. Spróbuj innego zapytania.
            </p>
          )}

          {matchedProducts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Programy Szkoleniowe</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {matchedProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={product.link}
                    className="block p-6 bg-card hover:bg-muted rounded-lg transition-colors"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground">{product.description}</p>
                    <p className="text-primary font-semibold mt-2">
                      {product.price}
                    </p>
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
