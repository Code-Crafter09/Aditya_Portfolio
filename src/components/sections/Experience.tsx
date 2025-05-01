
import { motion } from 'framer-motion';
import { useRef } from 'react';

interface TimelineItemProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  index: number;
}

const TimelineItem = ({ title, organization, period, description, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className={`relative ${isEven ? 'md:ml-auto' : ''} md:w-[48%] mb-12 md:mb-0`}
    >
      <div className="bg-card p-6 rounded-2xl border border-border relative z-10">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-3">
          {period}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
        <h4 className="text-muted-foreground mb-3">{organization}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      <div className="hidden md:block absolute top-8 z-0">
        <div className={`${isEven ? '-left-4' : '-right-4'} absolute w-8 h-8 rounded-full bg-primary/20 border-4 border-primary`} />
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const experienceItems = [
    {
      title: "Java Development Internship",
      organization: "VaultOfCodes",
      period: "2024",
      description: "Developed applications using Java with focus on OOP, file handling, GUI, and data structures. Collaborated with team members on various projects."
    },
    {
      title: "Google Gen AI Hackathon Finalist",
      organization: "Google",
      period: "2023",
      description: "Selected in Top 5 Finalists at Google Gen AI Exchange Hackathon. Developed an AI-powered solution using Google's Gen AI APIs."
    },
    {
      title: "Young Turks Round 1",
      organization: "Certificate Achieved",
      period: "October 2024",
      description: "Scored 94.58% on the Young Turks Round 1 certification, demonstrating technical and problem-solving abilities."
    },
    {
      title: "Digital Marketing Internship",
      organization: "VaultOfCodes",
      period: "3 months",
      description: "Completed a 3-month Digital Marketing Internship, gaining skills in social media management, content creation, and digital marketing strategies."
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background/95 to-background relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Experience & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="relative">
          {/* Timeline Center Line (visible only on md screens and up) */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-border -translate-x-1/2" />
          
          {/* Timeline Items */}
          <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between relative z-10">
            {experienceItems.map((item, index) => (
              <TimelineItem 
                key={index}
                title={item.title}
                organization={item.organization}
                period={item.period}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">
            <span className="gradient-text">Certifications</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Java Internship", org: "VaultOfCodes" },
              { name: "GIT Training", org: "Certificate" },
              { name: "Digital Marketing", org: "3-Month Internship" },
              { name: "Safety Dojo Game Simulation", org: "Marelli Motherson" },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: 0.1 * idx + 0.3, duration: 0.5 }}
                className="bg-card rounded-xl p-5 border border-border hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4 mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.21 13.89L7 23l9-9-8.212-.18a1 1 0 01-.578-1.811L21 3l-9 9h-3L8.21 13.89z" />
                  </svg>
                </div>
                <h4 className="font-medium text-center">{cert.name}</h4>
                <p className="text-sm text-muted-foreground text-center">{cert.org}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
