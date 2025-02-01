"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "shirts", label: "Shirts Collection" },
    { id: "pants", label: "Pants Collection" },
  ];

  useEffect(() => {
    // Fetch and combine all product data
    Promise.all([
      fetch("/data/pantsData.json").then((res) => res.json()),
      fetch("/data/shirtData.json").then((res) => res.json()),
    ])
      .then(([pantsData, shirtData]) => {
        const normalizedPants = pantsData.map((item) => ({
          id: item.title.toLowerCase().replace(/\s+/g, "-"),
          name: item.title,
          price: parseFloat(item.price.replace("$", "")),
          image: item.src,
          description: item.description,
          url: item.url,
          category: "pants",
        }));

        const normalizedShirts = shirtData.map((item) => ({
          id: item.title.toLowerCase().replace(/\s+/g, "-"),
          name: item.title,
          price: parseFloat(item.price.replace("$", "")),
          image: item.src,
          description: item.description,
          url: item.url,
          category: "shirts",
        }));

        setProducts([...normalizedPants, ...normalizedShirts]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
        setLoading(false);
      });
  }, []);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-8"
      >
        <div className="text-center">
          <h1 className="font-anime text-5xl mb-4 text-gradient-primary">
            Our Collection
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            Discover our unique anime-inspired fashion pieces, designed for
            style and comfort.
          </p>
        </div>

        <nav
          className="relative mb-12 glass-panel p-4"
          aria-label="Shop categories"
        >
          <div className="absolute bottom-0 w-full h-px bg-white/10 left-0"></div>
          <ul className="relative flex justify-center space-x-8 text-lg">
            {categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative pb-4 px-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded ${
                    activeCategory === category.id
                      ? "text-gradient-primary font-semibold"
                      : "text-foreground/70 hover:text-foreground transition-colors"
                  }`}
                  aria-current={
                    activeCategory === category.id ? "page" : undefined
                  }
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls={`${category.id}-panel`}
                >
                  {category.label}
                  {activeCategory === category.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-pink-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          role="tabpanel"
          id={`${activeCategory}-panel`}
          aria-label={`${activeCategory === "all" ? "All Products" : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} Collection`}`}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="glass-card group relative overflow-hidden h-full transition-all duration-150 ease-out hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:backdrop-blur-lg"
              initial={false}
              whileHover={{
                y: -5,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                },
              }}
            >
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg block h-full group-hover:bg-white/[0.02]"
              >
                <div className="relative w-full pt-[100%] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="absolute top-0 left-0 object-cover transform group-hover:scale-105 transition-all duration-150 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out bg-gradient-to-r from-primary/10 to-purple-500/10" />
                </div>
                <div className="p-4 relative transition-all duration-150 ease-out group-hover:bg-white/[0.02]">
                  <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold glass-effect-light rounded-full capitalize group-hover:shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-150 ease-out">
                    {product.category}
                  </span>
                  <h2 className="font-heading text-lg mb-2 group-hover:text-gradient-primary transition-all duration-150 ease-out">
                    {product.name}
                  </h2>
                  <p className="text-gradient-primary font-semibold group-hover:scale-105 transition-transform duration-150 ease-out">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
