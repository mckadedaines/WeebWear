"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const featuredProducts = [
    {
      id: 1,
      name: "Zero Two Pump Cover",
      price: 29.99,
      image: "/images/products/shirts/zero2-pump-cover.jpg",
      category: "shirts",
      description: "Darling in the Franxx inspired design",
    },
    {
      id: 2,
      name: "Chainsaw Man Pochita",
      price: 34.99,
      image: "/images/products/shirts/chainsaw-dog-pump-cover.png",
      category: "shirts",
      description: "Featuring everyone's favorite devil dog",
    },
    {
      id: 3,
      name: "Bleach Soul Society",
      price: 32.99,
      image: "/images/products/shirts/Bleach-pump-cover.jpg",
      category: "shirts",
      description: "Soul Society inspired streetwear",
    },
    {
      id: 4,
      name: "One Piece Robin",
      price: 31.99,
      image: "/images/products/shirts/robin-pump-cover.jpg",
      category: "shirts",
      description: "Nico Robin aesthetic design",
    },
  ];

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-DEFAULT"></div>
      </div>
    );
  }

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <motion.div
            animate={{ y: ["0%", "-2%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "easeInOut",
            }}
            className="h-[105%] relative w-full"
          >
            <Image
              src="/images/products/shirts/zero2-pump-cover.jpg"
              alt="Anime inspired fashion"
              fill
              className="object-cover filter brightness-90"
              priority
              sizes="100vw"
              quality={90}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </motion.div>

        <div className="container relative z-10 mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-block mb-4 text-sm sm:text-base uppercase text-white font-bold tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            >
              WELCOME TO WEEBWEAR
            </motion.span>
            <h1 className="font-anime text-5xl sm:text-6xl md:text-7xl mb-8 leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-primary to-secondary drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
              >
                Anime-Inspired
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="block bg-gradient-to-br from-white to-neutral-300 bg-clip-text text-transparent drop-shadow-lg"
              >
                Fashion For You
              </motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="text-lg sm:text-xl mb-10 text-neutral-200 max-w-2xl font-light leading-relaxed drop-shadow-md"
            >
              Express your passion for anime through our exclusive collection of
              streetwear and accessories. Each piece tells a story, just like
              your favorite anime.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="relative z-10"
            >
              <Link
                href="/shop"
                className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden rounded-lg transform hover:scale-105 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-primary/30"
              >
                <span className="relative z-10 font-bold text-white/90 group-hover:text-white transition-colors duration-300">
                  Explore Collection
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-DEFAULT/20 to-secondary-DEFAULT/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center">
            <h2 className="font-anime text-4xl mb-4 text-gradient-primary">
              Featured Collection
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover our most popular anime-inspired designs, crafted for
              comfort and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="featured-card group relative overflow-hidden rounded-xl"
                whileHover={{ y: -5 }}
              >
                <Link
                  href={`/shop?category=${product.category}`}
                  className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-xl"
                >
                  <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={product.id === 1}
                      loading={product.id === 1 ? undefined : "lazy"}
                    />
                    <div className="card-content absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4 relative z-10">
                    <h3 className="font-heading text-lg mb-1 text-white group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-white/70 mb-2">
                      {product.description}
                    </p>
                    <p className="text-primary font-semibold">
                      ${product.price}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <span className="glass-button inline-block w-full text-center py-2 rounded-lg text-white">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <Link href="/shop?category=shirts">
              <motion.div
                variants={itemVariants}
                className="glass-card relative h-[400px] rounded-lg overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/products/shirts/Bleach-pump-cover.jpg"
                  alt="Shirts"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-background/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-anime text-3xl mb-2 text-gradient-primary">
                    Shirts
                  </h3>
                  <span className="glass-button inline-block px-6 py-2 rounded-lg">
                    Shop Now
                  </span>
                </div>
              </motion.div>
            </Link>

            <Link href="/shop?category=shorts">
              <motion.div
                variants={itemVariants}
                className="glass-card relative h-[400px] rounded-lg overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/products/pants/Curse_Shrine_Shorts.webp"
                  alt="Shorts"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-background/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-anime text-3xl mb-2 text-gradient-primary">
                    Shorts
                  </h3>
                  <span className="glass-button inline-block px-6 py-2 rounded-lg">
                    Shop Now
                  </span>
                </div>
              </motion.div>
            </Link>

            <Link href="/shop?category=accessories">
              <motion.div
                variants={itemVariants}
                className="glass-card relative h-[400px] rounded-lg overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/images/products/shirts/chainsaw-dog-pump-cover.png"
                  alt="Accessories"
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent group-hover:from-background/90 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-anime text-3xl mb-2 text-gradient-primary">
                    Accessories
                  </h3>
                  <span className="glass-button inline-block px-6 py-2 rounded-lg">
                    Shop Now
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
