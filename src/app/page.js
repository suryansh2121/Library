'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();

  // Adjusted parallax ranges for smoother effect and better control
  const y1 = useTransform(scrollY, [0, 3000], [0, -400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -600]);
  const y3 = useTransform(scrollY, [0, 3000], [0, -800]);
  const y4 = useTransform(scrollY, [0, 3000], [0, -1000]);
  const y5 = useTransform(scrollY, [0, 3000], [0, -1200]);

  // Add subtle rotation for more dynamic movement
  const rotate1 = useTransform(scrollY, [0, 3000], [0, 5]);
  const rotate2 = useTransform(scrollY, [0, 3000], [0, -5]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-purple-950 to-violet-950 text-white overflow-x-hidden">
      {/* Parallax Layers */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: y1, rotate: rotate1 }} 
          className="absolute top-10 left-10 w-80 opacity-20"
          transition={{ ease: "easeOut" }}
        >
          <Image 
            src="/book1.png" 
            alt="book1" 
            width={320} 
            height={500} 
            className="w-full h-auto drop-shadow-xl" 
          />
        </motion.div>
        <motion.div 
          style={{ y: y2, rotate: rotate2 }} 
          className="absolute top-20 right-20 w-72 opacity-25"
          transition={{ ease: "easeOut" }}
        >
          <Image 
            src="/book2.png" 
            alt="book2" 
            width={300} 
            height={480} 
            className="w-full h-auto drop-shadow-xl" 
          />
        </motion.div>
        <motion.div 
          style={{ y: y3 }} 
          className="absolute top-40 left-1/2 -translate-x-1/2 w-96 opacity-30"
          transition={{ ease: "easeOut" }}
        >
          <Image 
            src="/book3.png" 
            alt="book3" 
            width={380} 
            height={600} 
            className="w-full h-auto drop-shadow-xl" 
          />
        </motion.div>
        <motion.div 
          style={{ y: y4, rotate: rotate1 }} 
          className="absolute bottom-20 left-10 w-80 opacity-20"
          transition={{ ease: "easeOut" }}
        >
          <Image 
            src="/book4.png" 
            alt="book4" 
            width={320} 
            height={500} 
            className="w-full h-auto drop-shadow-xl" 
          />
        </motion.div>
        <motion.div 
          style={{ y: y5, rotate: rotate2 }} 
          className="absolute bottom-10 right-10 w-72 opacity-15"
          transition={{ ease: "easeOut" }}
        >
          <Image 
            src="/book5.png" 
            alt="book5" 
            width={300} 
            height={480} 
            className="w-full h-auto drop-shadow-xl" 
          />
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 pt-32 px-4 sm:px-8">
        <section className="min-h-screen flex flex-col items-center justify-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent"
          >
            Welcome to BookVerse 📚
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-xl mt-6 max-w-2xl font-light"
          >
            Discover, Rent, and Review books with AI-powered insights.
          </motion.p>
        </section>

        <section className="py-20 px-6">
          <motion.h2 
            className="text-4xl font-semibold text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Explore Books
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((num) => (
              <motion.div
                key={num}
                className="p-6 bg-blue-100/20 rounded-lg shadow-lg backdrop-blur-md border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                📘 Book {['One', 'Two', 'Three'][num-1]}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-24 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            📊 Platform Stats
          </motion.h2>
          <div className="flex justify-center gap-12 text-2xl font-semibold">
            {['10k+ Books', '2k+ Authors', '500+ Reviews'].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {stat}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 px-8">
          <motion.h2 
            className="text-4xl font-semibold text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Featured Authors
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['👩‍💼 Author A', '👨‍💼 Author B', '👩‍🏫 Author C', '👨‍🏫 Author D'].map((author, i) => (
              <motion.div 
                key={i}
                className="text-center p-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {author}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Categories
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            {['Sci-Fi', 'Romance', 'Mystery', 'Horror'].map((category, i) => (
              <motion.span
                key={i}
                className="bg-white/90 text-blue-800 px-4 py-2 rounded-full shadow-md"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {category}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="py-24 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            📚 AI Book Assistant
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg mb-8 font-light"
          >
            Ask anything about a book and get instant AI summaries.
          </motion.p>
          <motion.button
            className="bg-white text-purple-800 px-8 py-3 rounded-full font-semibold shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.3)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            Try BookBot
          </motion.button>
        </section>
      </div>
    </main>
  );
}