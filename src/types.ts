export interface Question {
  id: string;
  question: string;
  options: string[];
  type: 'single' | 'multiple' | 'input';
}

export interface QuizAnswers {
  [key: string]: string | string[];
}

export interface Plan {
  id: string;
  name: string;
  duration: string;
  price: number;
  features: string[];
}

export interface FitnessProfile {
  goal: string;
  currentWeight: number;
  targetWeight: number;
  activityLevel: string;
  dietaryRestrictions: string[];
  timeToGoal: number;
  dailyCalories: number;
  workoutPlan: {
    weekly: Array<{
      day: string;
      workout: string;
    }>;
  };
  dietPlan: {
    mealPlan: {
      breakfast: string[];
      lunch: string[];
      dinner: string[];
      snacks: string[];
    };
    mealsPerDay: number;
    restrictions: string[];
  };
  fastingSchedule: {
    fastingWindow: number;
    eatingWindow: number;
    startTime: string;
    endTime: string;
  };
}