import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <span>© 2026 {personalInfo.name}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-4 h-4 text-accent fill-accent" /> and React
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3"
          >
            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>

            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
