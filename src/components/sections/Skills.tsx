
import { motion } from 'framer-motion';

interface SkillItemProps {
  name: string;
  level: number;
  index: number;
}

const SkillItem = ({ name, level, index }: SkillItemProps) => {
  const widthPercentage = `${level}%`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: widthPercentage }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
          className="h-full bg-primary rounded-full"
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const technicalSkills = [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 70 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Teamwork', level: 90 },
    { name: 'Communication', level: 85 },
    { name: 'Time Management', level: 80 },
  ];

  const tools = [
    { name: 'Git/GitHub', level: 85 },
    { name: 'VS Code', level: 90 },
    { name: 'Object-Oriented Programming', level: 85 },
    { name: 'Responsive Design', level: 80 },
  ];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  };

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-background/95 relative">
      <div className="container-custom">
        <motion.div
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
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.div 
            custom={1} 
            variants={variants} 
            className="w-20 h-1 bg-primary mx-auto"
          />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            custom={0}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">Technical Skills</h3>
            <div>
              {technicalSkills.map((skill, index) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={1}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">Soft Skills</h3>
            <div>
              {softSkills.map((skill, index) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            custom={2}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <h3 className="text-xl font-semibold mb-6 gradient-text">Tools & Concepts</h3>
            <div>
              {tools.map((skill, index) => (
                <SkillItem key={skill.name} name={skill.name} level={skill.level} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
