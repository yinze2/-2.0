
export interface Coach {
  id: string;
  name: string;
  avatar: string;
  specialty: string[];
  level: string;
  bio: string;
  price: string;
  contact: string;
  // Added optional fields used in CoachCard
  rating?: string;
  experience?: string;
}

export interface UserProfile {
  name: string;
  goal: string;
  weakness: '游泳' | '骑行' | '跑步';
}

// Fixed missing TrainingDay interface required by TrainingPlan.tsx
export interface TrainingDay {
  activity: string;
  duration: string;
  intensity: '高' | '中' | '低';
  description: string;
}
