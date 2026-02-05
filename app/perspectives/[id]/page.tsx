'use client';

import { useParams, useRouter } from 'next/navigation';
import { usePerspectiveStore } from '@/store/use-perspective-store';
import { useDashboardStore } from '@/store/use-dashboard-store';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import PerspectiveHeader from '@/components/perspectives/PerspectiveHeader';
import EvidenceSummaryCards from '@/components/perspectives/EvidenceSummaryCards';
import TabSwitcher from '@/components/perspectives/TabSwitcher';
import OverviewTab from '@/components/perspectives/OverviewTab';
import LeadersCard from '@/components/perspectives/LeadersCard';
import EvidenceTable from '@/components/perspectives/EvidenceTable';
import CommentsCard from '@/components/perspectives/CommentsCard';
import RecentActivities from '@/components/dashboard/RecentActivities';

export default function PerspectiveDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'evidence'>('overview');

  const id = params.id as string;
  const { getPerspectiveDetail } = usePerspectiveStore();
  const { getPerspectiveById } = useDashboardStore();

  const perspective = getPerspectiveById(id);
  const detail = getPerspectiveDetail(id);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'light';

  if (!perspective || !detail) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <h2 className={cn(
            "text-2xl font-semibold mb-2",
            currentTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
          )}>
            Perspective Not Found
          </h2>
          <p className={cn(
            "mb-4",
            currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          )}>
            The perspective you&apos;re looking for doesn&apos;t exist.
          </p>
          <button
            onClick={() => router.push('/')}
            className={cn(
              "font-medium",
              currentTheme === 'dark'
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-700'
            )}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <PerspectiveHeader
        detail={detail}
        currentTheme={currentTheme}
        onBack={() => router.back()}
      />

      <EvidenceSummaryCards
        evidenceSummary={detail.evidenceSummary}
        currentTheme={currentTheme}
      />

      <TabSwitcher
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentTheme={currentTheme}
      />

      {/* Overview Tab Content */}
      {activeTab === 'overview' && (
        <>
          <OverviewTab detail={detail} currentTheme={currentTheme} />
          <LeadersCard owners={detail.owners} currentTheme={currentTheme} />
        </>
      )}

      {/* Evidence Tab Content */}
      {activeTab === 'evidence' && (
        <>
          <EvidenceTable
            documents={detail.evidenceDocumentsList}
            currentTheme={currentTheme}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <CommentsCard
              comments={detail.comments}
              currentTheme={currentTheme}
            />
            <RecentActivities />
          </div>
        </>
      )}
    </div>
  );
}
