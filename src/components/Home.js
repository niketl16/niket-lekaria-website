import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-6"
        >
          Niket Lekaria
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl text-gray-600 mb-8"
        >
          Creative Developer & Designer
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <Link 
            to="/about" 
            className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className="px-8 py-4 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors"
          >
            My Work
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
