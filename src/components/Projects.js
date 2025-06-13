import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project One",
    description: "A modern e-commerce platform built with React and Node.js",
    tech: "React, Node.js, MongoDB",
    image: "https://via.placeholder.com/400",
    link: "#"
  },
  {
    title: "Project Two",
    description: "A responsive portfolio website with animations",
    tech: "React, TailwindCSS, Framer Motion",
    image: "https://via.placeholder.com/400",
    link: "#"
  },
  {
    title: "Project Three",
    description: "A real-time chat application with WebSocket",
    tech: "React, Node.js, Socket.io",
    image: "https://via.placeholder.com/400",
    link: "#"
  }
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600">
            Some of my recent work and projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.split(',').map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
