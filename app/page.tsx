import ProjectTimeline from '@/components/dashboard/ProjectTimeline';
import StatsCards from '@/components/dashboard/StatsCards';
import ProgressStatus from '@/components/dashboard/ProgressStatus';
import ComplianceScore from '@/components/dashboard/ComplianceScore';
import TopPerformers from '@/components/dashboard/TopPerformers';
import RecentActivities from '@/components/dashboard/RecentActivities';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import AuditReadiness from '@/components/dashboard/AuditReadiness';

export default function DashboardPage() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Project Timeline */}
      <ProjectTimeline />

      {/* Stats Cards */}
      <StatsCards />

      {/* Progress Status */}
      <ProgressStatus />

      {/* Top 3 Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 items-stretch">
        <ComplianceScore />
        <TopPerformers />
        <RecentActivities />
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <PerformanceChart />
        <AuditReadiness />
      </div>
    </div>
  );
}
