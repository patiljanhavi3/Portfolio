import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { personalInfo, achievements } from '../data/portfolioData';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      gradient: "from-primary/20 to-accent/20"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      gradient: "from-accent/20 to-primary/20"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "janhavi-r-patil",
      href: personalInfo.linkedin,
      gradient: "from-blue-500/20 to-primary/20"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "janhavi-patil",
      href: personalInfo.github,
      gradient: "from-purple-500/20 to-accent/20"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary/30 shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{method.label}</p>
                    <p className="font-medium text-foreground truncate">{method.value}</p>
                  </div>
                  <Send className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border shadow-lg"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-foreground/70">{personalInfo.education.institution}, Pune, India</p>
            </motion.div>
          </motion.div>

          {/* Achievements Highlight */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-primary/20 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Key Achievements
              </span>
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-background/50 hover:bg-background/80 transition-colors"
                >
                  <span className="text-2xl flex-shrink-0">{achievement.split(' ')[0]}</span>
                  <p className="text-foreground/80 leading-relaxed">
                    {achievement.split(' ').slice(1).join(' ')}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-8 p-4 rounded-xl bg-gradient-to-r from-primary to-accent"
            >
              <p className="text-center text-primary-foreground font-medium">
                Ready to build something amazing together? Let's talk!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
