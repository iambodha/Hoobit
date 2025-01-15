"use client";

import { motion } from 'framer-motion'
import { Code, Braces, Gamepad2, ChevronRight, Box, Music } from 'lucide-react'
import React from 'react'

function FeaturesSection() {
  return (
    <section id="features-section" className="py-5 lg:py-20 pb-20 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-12">
          What do we offer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Code className="h-8 w-8 text-sky-500" />,
              title: "Programming via python",
              description:
                "Geared toward beginners, this track helps you learn the basics of Python programming. Use these fundamentals to create projects you’re passionate about, from games to tools, guided by peers who love programming.",
            },
            {
              icon: <Box className="h-8 w-8 text-sky-500" />,
              title: "3D Modelling",
              description:
                "Get instant feedback on your code and learn interactively with our tutors, making each session more engaging and effective.",
            },
            {
              icon: <Braces className="h-8 w-8 text-sky-500" />,
              title: "Scratch",
              description:
                "Perfect for middle school and primary students, Scratch makes learning programming fun and interactive. Familiarize yourself with coding concepts while creating exciting games and animations, all in a playful and supportive environment.",
            },
            {
              icon: <Gamepad2 className="h-8 w-8 text-sky-500" />,
              title: "Game Development",
              description:
                "Start building your own games using Unity! Designed for students with a basic understanding of programming, this field covers game design, mechanics, and more, helping you turn your creative ideas into playable experiences.",
            },
            {
              icon: <Music className="h-8 w-8 text-sky-500" />,
              title: "Music",
              description:
                "Explore your musical talents, whether you’re interested in creating beats, composing songs, or mastering an instrument. Learn from peers who are passionate about music and develop your skills in a creative, supportive environment.",
            },
            {
              icon: <ChevronRight className="h-8 w-8 text-sky-500" />,
              title: "More Coming Soon",
              description:
                "Stay tuned for more exciting fields of learning to explore—new passions are on the way!",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-slate-800 rounded-lg shadow-lg p-6 hover:bg-slate-700 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;
