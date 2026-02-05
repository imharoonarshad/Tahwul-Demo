export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  status: 'completed' | 'current' | 'upcoming' | 'delayed';
}

export interface StatCard {
  id: string;
  label: string;
  value: string | number;
  icon: string;
  trend?: 'up' | 'down';
}

export interface CriteriaStatus {
  id: string;
  number: number;
  status: 'completed' | 'in-progress' | 'not-started' | 'delayed' | 'partially-uploaded' | 'fully-uploaded';
}

export interface SubArea {
  id: string;
  title: string;
  criteria: CriteriaStatus[];
}

export interface Perspective {
  id: string;
  title: string;
  category: string;
  progress: number;
  color: string;
  subareas: SubArea[];
}

export interface LeaderProfile {
  id: string;
  name: string;
  perspective: string;
  score: number;
  avatar: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  user: string;
  timestamp: string;
  type: 'document' | 'task' | 'criterion';
}

export interface MonthlyPerformance {
  month: string;
  value: number;
}

export interface AuditReadiness {
  percentage: number;
  overdueStandards: number;
  missingEvidence: number;
}
