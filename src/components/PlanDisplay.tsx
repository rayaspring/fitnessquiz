import { FitnessProfile } from '../types';
import { Button } from './Button';
import { Calendar, Clock, Dumbbell, Utensils } from 'lucide-react';

interface PlanDisplayProps {
  profile: FitnessProfile;
  onContinue: () => void;
}

export function PlanDisplay({ profile, onContinue }: PlanDisplayProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Personalized Fitness Journey</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Timeline & Goals
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>Target Weight: {profile.targetWeight} kg/lbs</li>
                <li>Estimated Time: {profile.timeToGoal} weeks</li>
                <li>Daily Calories: {profile.dailyCalories} kcal</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Dumbbell className="h-5 w-5" />
                Workout Plan
              </h3>
              <div className="space-y-3">
                {profile.workoutPlan.weekly.map((day) => (
                  <div key={day.day} className="flex justify-between items-center">
                    <span className="font-medium">{day.day}:</span>
                    <span className="text-gray-600">{day.workout}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Utensils className="h-5 w-5" />
                Nutrition Plan
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Daily Meals:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {profile.dietPlan.mealPlan.breakfast.map((meal) => (
                      <li key={meal}>{meal}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Fasting Schedule
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>Fasting Window: {profile.fastingSchedule.fastingWindow} hours</p>
                <p>Eating Window: {profile.fastingSchedule.startTime} - {profile.fastingSchedule.endTime}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button onClick={onContinue} size="lg">
            Continue to Plans
          </Button>
        </div>
      </div>
    </div>
  );
}