import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product, priority = false }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass-card overflow-hidden group relative"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          priority={priority}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {product.isNew && (
          <span className="absolute top-2 left-2 glass-effect-light text-xs font-medium px-2 py-1 rounded-full">
            New
          </span>
        )}

        {product.discount && (
          <span className="absolute top-2 right-2 glass-effect-light text-xs font-medium px-2 py-1 rounded-full text-primary">
            {product.discount}% OFF
          </span>
        )}
      </div>

      <div className="p-4 relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-heading text-lg">
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-gradient-primary transition-all duration-300"
            >
              {product.name}
            </Link>
          </h3>
          <div className="flex flex-col items-end">
            {product.originalPrice && (
              <span className="text-sm text-foreground/50 line-through">
                ${product.originalPrice}
              </span>
            )}
            <span className="font-semibold text-gradient-primary">
              ${product.price}
            </span>
          </div>
        </div>

        <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < (product.rating || 0)
                    ? "text-primary"
                    : "text-foreground/20"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-foreground/50 ml-1">
              ({product.reviewCount || 0})
            </span>
          </div>

          <button
            className="glass-button p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:rotate-12"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
