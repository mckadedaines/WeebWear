"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="font-anime text-5xl md:text-6xl mb-6 text-gradient">
            Our Story
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Where Anime Passion Meets Gym Fashion
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="font-heading text-3xl mb-4 text-gradient-primary">
              For the Otaku Athletes
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              WeebWear was born from a simple observation: the incredible
              overlap between anime enthusiasts and fitness lovers. We noticed
              that many gym-goers were also passionate about anime, yet there
              wasn&apos;t a brand that truly celebrated both cultures together.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our mission is to create high-quality gym wear that allows you to
              express your love for anime while crushing your workouts. Each
              piece in our collection is designed with both performance and
              style in mind, featuring iconic anime-inspired designs that make
              you stand out in the gym.
            </p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="relative h-[400px] glass-card rounded-xl overflow-hidden"
          >
            <Image
              src="/images/weebwear-about-us.webp"
              alt="WeebWear Inspiration"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          <div className="glass-card p-6 text-center">
            <h3 className="font-heading text-xl mb-4 text-gradient-primary">
              Quality Materials
            </h3>
            <p className="text-foreground/70">
              Premium moisture-wicking fabrics designed for intense workouts
              while maintaining comfort and style.
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="font-heading text-xl mb-4 text-gradient-primary">
              Unique Designs
            </h3>
            <p className="text-foreground/70">
              Exclusive anime-inspired artwork that sets you apart in the gym
              and shows off your passion.
            </p>
          </div>
          <div className="glass-card p-6 text-center">
            <h3 className="font-heading text-xl mb-4 text-gradient-primary">
              Performance Focused
            </h3>
            <p className="text-foreground/70">
              Every piece is tested by real athletes to ensure it meets both gym
              performance and style standards.
            </p>
          </div>
        </motion.div>

        {/* Community Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="font-heading text-3xl mb-6 text-gradient-primary">
            Join Our Community
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            WeebWear is more than just clothing - it&apos;s a community of
            like-minded individuals who share a passion for fitness and anime.
            Join us in creating a space where you can be proud of both your gym
            progress and your anime enthusiasm.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
