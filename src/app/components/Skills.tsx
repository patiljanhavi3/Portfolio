import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Code2, Wrench, Layers, Sparkles } from 'lucide-react';
import { skills } from '../data/portfolioData';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      icon: Code2,
      title: "Languages",
      skills: skills.languages,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: Layers,
      title: "Frameworks & Libraries",
      skills: skills.frameworks,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: skills.tools,
      gradient: "from-primary/20 to-secondary/40"
    },
    {
      icon: Sparkles,
      title: "Domains",
      skills: skills.domains,
      gradient: "from-secondary/40 to-primary/20"
    }
  ];

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical skill set across multiple domains
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl">{category.title}</h3>
              </div>

              {/* Skills Chips */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -2,
                      transition: { duration: 0.2 }
                    }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all cursor-default"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
