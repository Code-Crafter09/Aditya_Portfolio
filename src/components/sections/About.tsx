
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const About = () => {
  // Change HTMLElement to HTMLDivElement since we're using it with a div
  const sectionRef = useRef<HTMLDivElement>(null);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <section id="about" className="section-padding bg-background relative">
      <div className="container-custom">
        <motion.div
          ref={sectionRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.h2 
            custom={0} 
            variants={variants} 
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            About <span className="gradient-text">Me</span>
          </motion.h2>
          <motion.div 
            custom={1} 
            variants={variants} 
            className="w-20 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            custom={2} 
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border-2 border-primary p-1">
              <div className="w-full h-full bg-gradient-to-bl from-blue-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Aditya Kumar</h3>
                  <p className="text-muted-foreground mb-4">Final-year CSE Diploma Student</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">Begusarai, Bihar, India</p>
                    </div>
                    <div>
                      <p className="font-semibold">Education</p>
                      <p className="text-muted-foreground">DRIEMS Polytechnic</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 top-10 left-10 right-10 bottom-10 rounded-3xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl" />
          </motion.div>

          <motion.div 
            custom={3} 
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
              <p className="text-muted-foreground mb-4">
                I'm a final-year Computer Science & Engineering diploma student at DRIEMS Polytechnic, passionate about software development and artificial intelligence.
              </p>
              <p className="text-muted-foreground">
                My journey in tech is driven by curiosity and a desire to solve real-world problems through innovative solutions. Beyond coding, I enjoy reading, football, and exploring new technologies.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">What I do?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Develop responsive web applications</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Create Java applications with OOP principles</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Explore AI and emerging technologies</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                  <span>Collaborate on team projects</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
