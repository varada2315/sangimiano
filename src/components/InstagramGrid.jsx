import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Heart } from 'lucide-react';
import { INSTAGRAM_POSTS } from '../data/products';

export default function InstagramGrid() {
  return (
    <section className="w-full px-4 sm:px-6 py-8">
      {/* Section Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] font-sans">
          Follow us on{' '}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Instagram
          </a>
        </h2>
      </div>

      {/* 3 Column Mobile / 6 Column Desktop Image Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
        {INSTAGRAM_POSTS.map((post, idx) => (
          <motion.a
            key={post.id}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="group relative aspect-square rounded-xl overflow-hidden bg-white border border-black/[0.08] hover:border-black/30 transition-all duration-300 shadow-md"
          >
            <img
              src={post.image}
              alt={`Instagram post ${post.id}`}
              className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-[0.85] contrast-[1.05]"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-1.5 text-white">
              <Instagram className="w-6 h-6 text-white" />
              <div className="flex items-center space-x-1 text-xs font-mono text-neutral-300">
                <Heart className="w-3.5 h-3.5 fill-white text-white" />
                <span>{post.likes}</span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
