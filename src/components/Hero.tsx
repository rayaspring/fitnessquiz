import { motion } from 'framer-motion';
import { Button } from './Button';

interface HeroProps {
  onGetStarted: () => void;
}

export function Hero({ onGetStarted }: HeroProps) {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Cyberpunk Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark/90 z-10" />
        <motion.img 
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=2940"
          alt="Fitness background"
          className="w-full h-full object-cover animate-zoom"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        {/* Cyberpunk Grid Overlay */}
        <div className="absolute inset-0 z-20 opacity-10 pointer-events-none bg-grid-pattern" />
      </div>
      
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Title with Neon Effect */}
          <h1 className="font-heading text-7xl sm:text-8xl md:text-9xl font-bold mb-6">
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-neon via-purple-neon to-purple-dark animate-pulse-neon">
                Elite
              </span>
              <span className="absolute inset-0 blur-lg bg-purple-neon/50" />
            </span>
            <span className="block relative">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-neon via-purple-neon to-purple-dark animate-pulse-neon">
                Edge
              </span>
              <span className="absolute inset-0 blur-lg bg-purple-neon/50" />
            </span>
          </h1>
          
          {/* Tagline */}
          <motion.p 
            className="mt-6 text-xl text-white/90 max-w-3xl mx-auto font-body font-light tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We address your life's challenges swiftly by implementing a research-supported weekly practice that serves as a catalyst for enhancing all aspects of your life.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button
              onClick={onGetStarted}
              size="lg"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Begin Your Evolution</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-neon to-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}