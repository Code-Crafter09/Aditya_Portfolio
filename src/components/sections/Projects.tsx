
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  live?: string;
  highlights?: string[];
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: '🏥 Hospital Care Manager',
      description: 'A modern hospital management web app to streamline patient records, appointments, and admin tasks.',
      image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'TypeScript'],
      live: 'https://hospital-care-manager.vercel.app/',
      highlights: [
        'Protected routes', 
        'Calendar view', 
        'Responsive dashboard', 
        'Staff & patient management'
      ]
    },
    {
      title: '💼 Java Programming Internship Project',
      description: 'Built applications and mini-projects using Java for real-world scenarios at VaultOfCodes.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
      tags: ['Java', 'OOP', 'File Handling', 'GUI', 'Data Structures'],
      highlights: [
        'OOP implementation', 
        'File handling capabilities', 
        'GUI applications', 
        'Data structure concepts'
      ]
    },
    {
      title: '🤖 Google Gen AI Hackathon Project',
      description: 'Selected in Top 5 Finalists at Google Gen AI Exchange Hackathon. AI-powered solution using Google\'s Gen AI APIs.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
      tags: ['AI', 'Google APIs', 'Gen AI', 'Hackathon'],
      highlights: [
        'Selected as Top 5 Finalist', 
        'AI-powered solution', 
        'Google\'s Gen AI APIs integration'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 
            variants={titleVariants}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.div 
            variants={titleVariants}
            className="w-20 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-2xl overflow-hidden border border-border group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                {project.highlights && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Highlights:</h4>
                    <ul className="list-disc text-sm text-muted-foreground pl-5 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 my-4">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs bg-secondary px-2 py-1 rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3 mt-4">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.live && (
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
