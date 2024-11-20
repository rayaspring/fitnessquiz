import { useState } from 'react';
import { questions } from '../data/questions';
import { QuizAnswers } from '../types';
import { Button } from './Button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuizProps {
  onComplete: (answers: QuizAnswers) => void;
}

export function Quiz({ onComplete }: QuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});

  const currentQuestion = questions[currentStep];

  const handleAnswer = (answer: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }));
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentStep === questions.length - 1) {
      onComplete(answers);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen bg-dark flex items-center justify-center px-4 py-12">
      <motion.div 
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-dark-light/50 backdrop-blur-lg rounded-2xl border border-purple-neon/20 shadow-neon p-8">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-neon to-purple-dark"
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 neon-text">
                {currentQuestion.question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {currentQuestion.type === 'input' ? (
                  <input
                    type="number"
                    className="w-full bg-dark-lighter border-2 border-purple-neon/30 rounded-xl p-4 text-white placeholder-white/50 focus:border-purple-neon focus:ring-2 focus:ring-purple-neon/20 transition-all duration-300"
                    placeholder="Enter your answer"
                    value={answers[currentQuestion.id] || ''}
                    onChange={(e) => handleAnswer(e.target.value)}
                  />
                ) : (
                  currentQuestion.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="w-full p-4 text-left rounded-xl border-2 border-purple-neon/30 bg-dark-lighter hover:border-purple-neon hover:bg-purple-neon/10 transition-all duration-300 group relative overflow-hidden"
                    >
                      <span className="relative z-10 text-white text-lg font-medium group-hover:text-purple-neon transition-colors">
                        {option}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-neon/10 to-purple-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            {currentStep > 0 && (
              <Button
                onClick={handleBack}
                className="flex items-center gap-2 text-white font-semibold neon-text"
                variant="secondary"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="ml-auto flex items-center gap-2 text-white font-semibold neon-text"
            >
              <span>
                {currentStep === questions.length - 1 ? 'Complete' : 'Next'}
              </span>
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}