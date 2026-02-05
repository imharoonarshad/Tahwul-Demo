'use client';

import { useDashboardStore } from '@/store/use-dashboard-store';
import Image from 'next/image';

const iconSvgMap: { [key: string]: string } = {
  'trending-up': '/Overall_Progress.svg',
  'clipboard-list': '/Total_Criteria.svg',
  'check-circle': '/Completed_Criteria.svg',
  'file-text': '/Evidence_Documents.svg',
  'file-check': '/Evidence_(Completed).svg',
  upload: '/Uploaded_to_DGA.svg',
};

export default function StatsCards() {
  const { statCards } = useDashboardStore();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
      {statCards.map((card) => {
        const svgSrc = iconSvgMap[card.icon];

        return (
          <div
            key={card.id}
            className="bg-card dark:bg-card rounded-lg p-5 shadow-sm border border-gray-100 dark:border-border transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl font-bold text-gray-900 dark:text-foreground">
                {card.value}
              </div>
              <div className="shrink-0">
                <Image src={svgSrc} alt={card.label} width={24} height={24} />
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-muted-foreground">
              {card.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
