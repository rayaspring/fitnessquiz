import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Dumbbell, Timer, Utensils } from 'lucide-react';

export function FeaturedPrograms() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const programs = [
    {
      title: 'Elite Training',
      description: 'Personalized high-performance workout programs',
      icon: Dumbbell,
      image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=1931'
    },
    {
      title: 'Precision Nutrition',
      description: 'Science-backed nutrition plans for optimal results',
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2070'
    },
    {
      title: 'Lifestyle Design',
      description: 'Holistic approach to sustainable fitness',
      icon: Timer,
      image: 'https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=2070'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl font-bold text-gold mb-4">
            Signature Programs
          </h2>
          <p className="text-white/80 font-body text-lg max-w-2xl mx-auto">
            Discover our carefully curated selection of premium fitness experiences
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {programs.map((program) => (
            <motion.div
              key={program.title}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg aspect-[3/4]"
            >
              <div className="absolute inset-0">
                <img 
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90" />
              </div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <program.icon className="text-gold mb-4 h-8 w-8" />
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  {program.title}
                </h3>
                <p className="text-white/80 font-body text-sm">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}