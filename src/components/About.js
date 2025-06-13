import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  // Split text into words for hover highlighting
  const highlightText = (text) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="hover:font-bold transition-all duration-300">
        {word}{' '}
      </span>
    ));
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center mb-16"
        >
          <motion.h2 
            variants={item}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            About Me
          </motion.h2>
          <motion.p 
            variants={item}
            className="text-xl text-gray-600"
          >
            {highlightText("I'm Niket Lekaria, a passionate software engineer with expertise in Java, AWS, and Kafka. I thrive on solving complex problems and creating scalable solutions.")}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h3 
              variants={item}
              className="text-2xl font-bold text-gray-900"
            >
              Professional Experience
            </motion.h3>
            <motion.div 
              variants={item}
              className="space-y-6"
            >
              {/* TCS Experience */}
              <motion.div 
                variants={item}
                className="border-l-4 border-blue-500 pl-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Tata Consultancy Services (TCS)</h4>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                  </div>
                  <span className="text-sm text-gray-500">2020 - 2022</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {highlightText("Developed scalable Java applications using Spring Boot framework")}
                  {highlightText("Implemented AWS services for cloud deployment and infrastructure management")}
                  {highlightText("Worked on Kafka-based event-driven architecture for real-time data processing")}
                </ul>
              </motion.div>

              {/* Aumni Techworks Experience */}
              <motion.div 
                variants={item}
                className="border-l-4 border-blue-500 pl-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Aumni Techworks</h4>
                    <p className="text-sm text-gray-600">Senior Software Engineer</p>
                  </div>
                  <span className="text-sm text-gray-500">2022 - Present</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {highlightText("Lead development of microservices architecture using Java and Spring Cloud")}
                  {highlightText("Implemented CI/CD pipelines using Jenkins and GitHub Actions")}
                  {highlightText("Mentored junior developers and led technical design discussions")}
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <motion.h3 
              variants={item}
              className="text-2xl font-bold text-gray-900"
            >
              Education
            </motion.h3>
            <motion.div 
              variants={item}
              className="space-y-6"
            >
              <motion.div 
                variants={item}
                className="border-l-4 border-blue-500 pl-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">[Your College Name]</h4>
                    <p className="text-sm text-gray-600">Bachelor of Technology in Computer Science</p>
                  </div>
                  <span className="text-sm text-gray-500">2016 - 2020</span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {highlightText("Graduated with honors")}
                  {highlightText("Active participant in technical clubs and hackathons")}
                  {highlightText("Completed multiple industry-relevant projects")}
                </ul>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={container}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              <motion.h4 
                variants={item}
                className="text-xl font-semibold text-gray-800"
              >
                Skills
              </motion.h4>
              <motion.div 
                variants={container}
                className="space-y-2"
              >
                <motion.div 
                  variants={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-600">•</span>
                  <span className="hover:font-bold transition-all duration-300">Java & Spring Boot</span>
                </motion.div>
                <motion.div 
                  variants={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-600">•</span>
                  <span className="hover:font-bold transition-all duration-300">AWS Cloud Services</span>
                </motion.div>
                <motion.div 
                  variants={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-600">•</span>
                  <span className="hover:font-bold transition-all duration-300">Apache Kafka</span>
                </motion.div>
                <motion.div 
                  variants={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-600">•</span>
                  <span className="hover:font-bold transition-all duration-300">Microservices Architecture</span>
                </motion.div>
                <motion.div 
                  variants={item}
                  className="flex items-center gap-2"
                >
                  <span className="text-blue-600">•</span>
                  <span className="hover:font-bold transition-all duration-300">CI/CD Pipelines</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
