import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, Award, Code, Heart } from 'lucide-react';
import { about, personalInfo } from '../data/portfolioData';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: personalInfo.education.degree,
      value: personalInfo.education.institution
    },
    {
      icon: Award,
      title: "Academic Excellence",
      value: `${personalInfo.education.cgpa} CGPA • ${personalInfo.education}`
    },
    {
      icon: Code,
      title: "Specialization",
      value: "AI/ML & Full Stack Development"
    },
    {
      icon: Heart,
      title: "Community",
      value: "Open Source Contributor"
    }
  ];

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about building intelligent solutions that make a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border shadow-xl">
              <p className="text-lg leading-relaxed text-foreground/80">
                {about.summary}
              </p>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/40 border border-border shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm text-muted-foreground mb-1">{item.title}</h3>
                <p className="font-medium text-foreground">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
