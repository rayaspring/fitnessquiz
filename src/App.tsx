import { useState } from 'react';
import { Quiz } from './components/Quiz';
import { PlanSelection } from './components/PlanSelection';
import { Checkout } from './components/Checkout';
import { PlanDisplay } from './components/PlanDisplay';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { FeaturedPrograms } from './components/FeaturedPrograms';
import { Footer } from './components/Footer';
import { Plan, QuizAnswers, FitnessProfile } from './types';
import { generateFitnessProfile } from './utils/planGenerator';

export default function App() {
  const [step, setStep] = useState<'welcome' | 'quiz' | 'results' | 'plans' | 'checkout'>('welcome');
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);
  const [fitnessProfile, setFitnessProfile] = useState<FitnessProfile | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleQuizComplete = (answers: QuizAnswers) => {
    const profile = generateFitnessProfile(answers);
    setQuizAnswers(answers);
    setFitnessProfile(profile);
    setStep('results');
  };

  const handlePlanSelect = (plan: Plan) => {
    setSelectedPlan(plan);
    setStep('checkout');
  };

  return (
    <div className="min-h-screen bg-dark font-body">
      <Navigation />
      
      {step === 'welcome' && (
        <>
          <Hero onGetStarted={() => setStep('quiz')} />
          <FeaturedPrograms />
          <Footer />
        </>
      )}

      {step === 'quiz' && (
        <div className="pt-20">
          <Quiz onComplete={handleQuizComplete} />
        </div>
      )}

      {step === 'results' && fitnessProfile && (
        <div className="pt-20">
          <PlanDisplay 
            profile={fitnessProfile} 
            onContinue={() => setStep('plans')} 
          />
        </div>
      )}

      {step === 'plans' && (
        <div className="pt-20">
          <PlanSelection onSelectPlan={handlePlanSelect} />
        </div>
      )}

      {step === 'checkout' && selectedPlan && (
        <div className="pt-20">
          <Checkout plan={selectedPlan} onBack={() => setStep('plans')} />
        </div>
      )}
    </div>
  );
}