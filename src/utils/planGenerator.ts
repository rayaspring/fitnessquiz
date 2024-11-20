import { QuizAnswers, FitnessProfile } from '../types';

export function generateFitnessProfile(answers: QuizAnswers): FitnessProfile {
  const currentWeight = parseFloat(answers.currentWeight as string);
  const targetWeight = parseFloat(answers.targetWeight as string);
  const weightDiff = currentWeight - targetWeight;
  
  // Calculate time to reach goal based on healthy weight loss rate
  const weeksToGoal = Math.ceil(weightDiff / 0.75);
  
  // Calculate daily calorie deficit needed (7700 calories = 1kg of fat)
  const dailyDeficit = (weightDiff * 7700) / (weeksToGoal * 7);

  // Generate fasting schedule based on preference
  const fastingSchedule = {
    fastingWindow: answers.fasting === 'Yes' ? 16 : 14,
    eatingWindow: answers.fasting === 'Yes' ? 8 : 10,
    startTime: answers.fasting === 'Yes' ? '12:00' : '10:00',
    endTime: '20:00'
  };

  return {
    goal: answers.goal as string,
    currentWeight,
    targetWeight,
    activityLevel: answers.dailyActivity as string,
    dietaryRestrictions: Array.isArray(answers.dietHistory) ? answers.dietHistory : [],
    timeToGoal: weeksToGoal,
    dailyCalories: Math.max(1500, 2000 - dailyDeficit),
    workoutPlan: {
      weekly: [
        { day: 'Monday', workout: 'Full Body Strength + 20min Cardio' },
        { day: 'Tuesday', workout: '30min Walking' },
        { day: 'Wednesday', workout: 'Upper Body + Core' },
        { day: 'Thursday', workout: 'Rest/Light Stretching' },
        { day: 'Friday', workout: 'Lower Body + 20min Cardio' },
        { day: 'Saturday', workout: '45min Walking/Swimming' },
        { day: 'Sunday', workout: 'Rest' }
      ]
    },
    dietPlan: {
      mealPlan: {
        breakfast: ['Oatmeal with berries', 'Greek yogurt with nuts', 'Whole grain toast with eggs'],
        lunch: ['Grilled chicken salad', 'Quinoa bowl with vegetables', 'Turkey wrap with avocado'],
        dinner: ['Baked salmon with vegetables', 'Lean steak with sweet potato', 'Tofu stir-fry'],
        snacks: ['Apple with almond butter', 'Protein shake', 'Carrot sticks with hummus']
      },
      mealsPerDay: parseInt((answers.mealsPerDay as string)?.charAt(0) || '3'),
      restrictions: Array.isArray(answers.dietHistory) ? answers.dietHistory : []
    },
    fastingSchedule
  };
}