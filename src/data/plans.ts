import { Plan } from '../types';

export const plans: Plan[] = [
  {
    id: 'weekly',
    name: '1 Week Kickstart',
    duration: '1 week',
    price: 29.99,
    features: [
      'Personalized workout plan',
      'Custom meal planning',
      'Daily calorie targets',
      'Basic progress tracking'
    ]
  },
  {
    id: 'monthly',
    name: 'Monthly Transform',
    duration: '1 month',
    price: 79.99,
    features: [
      'Everything in Weekly plan',
      'Weekly progress check-ins',
      'Customized macro tracking',
      'Recipe suggestions',
      'Workout variations'
    ]
  },
  {
    id: 'quarterly',
    name: '12-Week Complete',
    duration: '12 weeks',
    price: 199.99,
    features: [
      'Everything in Monthly plan',
      'Advanced progress analytics',
      'Priority support',
      'Meal prep guides',
      'Exercise video library',
      'Community access'
    ]
  }
];