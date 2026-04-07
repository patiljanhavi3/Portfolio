import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Award, Calendar, Tag } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'from-purple-500/20 to-blue-500/20';
      case 'Web Development':
        return 'from-primary/20 to-accent/20';
      case 'Cloud Computing':
        return 'from-blue-400/20 to-cyan-400/20';
      case 'Data Science':
        return 'from-green-400/20 to-teal-400/20';
      case 'Programming':
        return 'from-orange-400/20 to-red-400/20';
      default:
        return 'from-primary/20 to-accent/20';
    }
  };

  return (
    <section id="certifications" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Certifications & Achievements
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
              style={{ perspective: 1000 }}
              onHoverStart={() => setFlippedCard(cert.id)}
              onHoverEnd={() => setFlippedCard(null)}
              className="h-64"
            >
              <motion.div
                animate={{ rotateY: flippedCard === cert.id ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring" }}
                style={{ 
                  transformStyle: "preserve-3d",
                  position: "relative",
                  width: "100%",
                  height: "100%"
                }}
              >
                {/* Front of Card */}
                <div
                  style={{ 
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                  }}
                  className="rounded-2xl bg-gradient-to-br from-card to-secondary/30 border border-border shadow-lg p-6 flex flex-col"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getCategoryColor(cert.category)} flex items-center justify-center mb-4`}>
                    <Award className="w-8 h-8 text-primary" />
                  </div>

                  <h4 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {cert.name}
                  </h4>

                  <p className="text-sm text-primary font-medium mb-2">
                    {cert.issuer}
                  </p>

                  <div className="mt-auto">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="w-3 h-3" />
                      {cert.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  style={{ 
                    backfaceVisibility: "hidden",
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    transform: "rotateY(180deg)"
                  }}
                  className={`rounded-2xl bg-gradient-to-br ${getCategoryColor(cert.category)} border border-primary/30 shadow-lg p-6 flex flex-col items-center justify-center text-center`}
                >
                  <Award className="w-12 h-12 text-primary mb-4" />
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-primary font-medium mb-2">
                    {cert.issuer}
                  </p>
                  <span className="text-xs px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
                    {cert.category}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
