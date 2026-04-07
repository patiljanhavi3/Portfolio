import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Github, ExternalLink, Award, Sparkles } from 'lucide-react';
import { projects } from '../data/portfolioData';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions with real-world impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative rounded-3xl bg-gradient-to-br from-card to-secondary/30 border border-border overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/20 transition-all"
            >
              {/* Award Badge */}
              {project.award && (
                <div className="absolute top-4 right-4 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent to-primary text-white shadow-lg"
                  >
                    <Award className="w-4 h-4" />
                    <span className="text-xs font-medium">{project.award}</span>
                  </motion.div>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                </div>

                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact */}
                <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <Sparkles className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-foreground/80">{project.impact}</p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-xs bg-secondary border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </motion.a>

                  {project.live && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary hover:bg-muted border border-border transition-all flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
