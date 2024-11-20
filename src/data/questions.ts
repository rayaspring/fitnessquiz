import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'goal',
    question: 'What is your main goal?',
    type: 'single',
    options: [
      'Lose 1-20 lb for good',
      'Lose 21-40 lb for good',
      'Lose over 40 lb for good',
      'Maintain weight and get fit',
      'I haven\'t decided yet'
    ]
  },
  {
    id: 'gender',
    question: 'What is your biological sex?',
    type: 'single',
    options: ['Male', 'Female']
  },
  {
    id: 'age',
    question: 'What is your age?',
    type: 'single',
    options: ['Under 20', '20s', '30s', '40s', '50+']
  },
  {
    id: 'health',
    question: 'Are you at risk of any of the following?',
    type: 'multiple',
    options: [
      'Diabetes',
      'Hormonal issues',
      'Sleep apnea',
      'High blood pressure',
      'Heart disease',
      'None of the above'
    ]
  },
  {
    id: 'currentWeight',
    question: 'What is your current weight? (kg/lbs)',
    type: 'input',
    options: []
  },
  {
    id: 'targetWeight',
    question: 'What is your goal weight? (kg/lbs)',
    type: 'input',
    options: []
  },
  {
    id: 'weightLossReason',
    question: 'Why do you want to lose weight?',
    type: 'multiple',
    options: [
      'Increase self-confidence',
      'Feel better in clothes',
      'Increase energy level',
      'Look more attractive',
      'Enhance physical performance'
    ]
  },
  {
    id: 'dailyTime',
    question: 'How much time do you have for yourself every day?',
    type: 'single',
    options: [
      'I hardly have time for myself',
      'I\'m busy but always try to put time aside to recharge',
      'My schedule is pretty open and flexible'
    ]
  },
  {
    id: 'sleep',
    question: 'How much sleep do you usually get at night?',
    type: 'single',
    options: [
      '7 hours or less',
      '7-9 hours',
      '9-12 hours',
      '12 hours or more'
    ]
  },
  {
    id: 'lastIdealWeight',
    question: 'How long ago were you at your ideal weight?',
    type: 'single',
    options: [
      '1 to 6 months',
      '6-12 months',
      '1 to 2 years',
      '2+ years',
      'I\'m at my ideal weight now'
    ]
  },
  {
    id: 'lifestyle',
    question: 'Which best describes your lifestyle?',
    type: 'single',
    options: [
      'My diet and activity need a lot of work',
      'I have some healthy habits',
      'I mostly eat well and stay active'
    ]
  },
  {
    id: 'goalTimeline',
    question: 'How quickly do you want to achieve your goal?',
    type: 'single',
    options: [
      'As fast as possible',
      'Slow and steady',
      'Somewhere in between'
    ]
  },
  {
    id: 'waterIntake',
    question: 'How many glasses of water do you drink per day?',
    type: 'single',
    options: [
      'I don\'t drink any',
      '1-4',
      '4-8',
      'More than 8'
    ]
  },
  {
    id: 'exercise',
    question: 'How often do you work out?',
    type: 'single',
    options: [
      'I don\'t exercise now',
      '1-2 times a week',
      '3-5 times a week',
      'I exercise daily'
    ]
  },
  {
    id: 'motivation',
    question: 'How motivated are you to reach your target weight?',
    type: 'single',
    options: [
      'I\'m ready',
      'Feeling hopeful',
      'I\'m taking it easy'
    ]
  },
  {
    id: 'fasting',
    question: 'Do you have a specific schedule for intermittent fasting that you like to follow?',
    type: 'single',
    options: [
      'Yes',
      'No',
      'Not at the moment but I did in the past'
    ]
  },
  {
    id: 'groceryHabits',
    question: 'Do you stock your fridge with fruits, veggies, proteins, and good fats?',
    type: 'single',
    options: [
      'Yeah, that\'s so me',
      'That\'s sometimes me',
      'That\'s rarely me',
      'Nope, not me'
    ]
  },
  {
    id: 'weeklyConsumption',
    question: 'Which of the following items do you consume at least once a week?',
    type: 'multiple',
    options: [
      'Sweet treats',
      'Alcohol',
      'Salty foods',
      'Fried foods',
      'Caffeine'
    ]
  },
  {
    id: 'mealsPerDay',
    question: 'How many times a day do you prefer to eat?',
    type: 'single',
    options: [
      'Less than 2 times a day',
      '3 times a day',
      '4 times a day',
      '5 or more times a day'
    ]
  },
  {
    id: 'dietHistory',
    question: 'Which of the following diets have you tried or do you follow?',
    type: 'multiple',
    options: [
      'Keto',
      'High-protein',
      'Gluten-free',
      'Lactose-free',
      'None of the above'
    ]
  },
  {
    id: 'foodRestrictions',
    question: 'Select any foods you don\'t eat:',
    type: 'multiple',
    options: [
      'Peas',
      'Mushrooms',
      'Zucchinis',
      'Tomatoes',
      'Peppers',
      'None of these'
    ]
  },
  {
    id: 'dailyActivity',
    question: 'What does your typical day look like in terms of activity?',
    type: 'single',
    options: [
      'Mostly seated',
      'Minimal movement',
      'Moderately active',
      'On my feet all day'
    ]
  },
  {
    id: 'walkingHabits',
    question: 'How much do you walk daily?',
    type: 'single',
    options: [
      'Less than 1 hour',
      '1-2 hours a day',
      'More than 2 hours'
    ]
  },
  {
    id: 'challenges',
    question: 'Do you relate to any of the following statements?',
    type: 'multiple',
    options: [
      'Finding clothes that fit me well is a challenge',
      'I am unhappy with how I look',
      'My mental health is negatively affected by my body image',
      'One unhealthy choice leads to another',
      'I regress to old habits after short periods of healthy living'
    ]
  },
  {
    id: 'needGuidance',
    question: 'Do you feel like you know what you should be doing, but need a plan that fits your life and schedule?',
    type: 'single',
    options: ['Yes', 'No']
  },
  {
    id: 'weightGainFactors',
    question: 'Have any life events led to weight gain in the last few years?',
    type: 'multiple',
    options: [
      'Busier work or family life',
      'Medication or hormonal disorder',
      'Stress',
      'Injury or accident',
      'Other',
      'None of the above'
    ]
  },
  {
    id: 'previousMethods',
    question: 'Have you tried any of these methods before to lose weight?',
    type: 'multiple',
    options: [
      'Fitness trackers',
      'Calorie-counting apps',
      'Gym or exercise',
      'Meal planning tools',
      'Restrictive dieting',
      'None of the above'
    ]
  },
  {
    id: 'bodyImage',
    question: 'Does your body image affect your interactions with other people?',
    type: 'single',
    options: ['Yes', 'No', 'Sometimes']
  },
  {
    id: 'workActivity',
    question: 'At work, are you typically on your feet or sitting at a desk?',
    type: 'single',
    options: ['Active', 'Seated', 'Mix of both']
  },
  {
    id: 'mealTiming',
    question: 'Do you eat meals at roughly the same time each day?',
    type: 'single',
    options: ['Yes', 'No', 'Sometimes']
  }
];