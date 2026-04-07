import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Code, Trophy, Users } from 'lucide-react';
import { experience, leadership } from '../data/portfolioData';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return Briefcase;
      case 'program':
        return Trophy;
      case 'opensource':
        return Code;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Experience & Leadership
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional journey and community involvement
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl mb-6 flex items-center gap-2"
          >
            <Briefcase className="w-6 h-6 text-primary" />
            Professional Experience
          </motion.h3>

          <div className="space-y-4">
            {experience.map((exp, index) => {
              const Icon = getIcon(exp.type);
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all"
                >
                  {/* Decorative Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-accent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-foreground/70 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Leadership & Community */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-2xl mb-6 flex items-center gap-2"
          >
            <Users className="w-6 h-6 text-primary" />
            Leadership & Community
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {leadership.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-1">{item.role}</h4>
                <p className="text-sm text-primary font-medium">{item.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
