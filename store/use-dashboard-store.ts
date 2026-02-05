import { create } from 'zustand';
import {
  TimelineEvent,
  StatCard,
  Perspective,
  LeaderProfile,
  Activity,
  MonthlyPerformance,
  AuditReadiness,
} from '@/types/dashboard';
import {
  timelineEvents,
  statCards,
  perspectives,
  topLeaders,
  recentActivities,
  monthlyPerformance,
  auditReadiness,
} from '@/data/mock-data';

interface DashboardStore {
  timelineEvents: TimelineEvent[];
  statCards: StatCard[];
  perspectives: Perspective[];
  topLeaders: LeaderProfile[];
  recentActivities: Activity[];
  monthlyPerformance: MonthlyPerformance[];
  auditReadiness: AuditReadiness;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  getPerspectiveById: (id: string) => Perspective | undefined;
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  timelineEvents,
  statCards,
  perspectives,
  topLeaders,
  recentActivities,
  monthlyPerformance,
  auditReadiness,
  selectedYear: 2026,
  setSelectedYear: (year: number) => set({ selectedYear: year }),
  getPerspectiveById: (id: string) => {
    return get().perspectives.find((p) => p.id === id);
  },
}));
