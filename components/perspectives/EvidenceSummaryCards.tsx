'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { EvidenceSummary } from '@/types/details';

interface EvidenceSummaryCardsProps {
  evidenceSummary: EvidenceSummary;
  currentTheme: string | undefined;
}

const cards = [
  { key: 'total' as const, label: 'Total Evidence', icon: '/Total_Evidence.svg' },
  { key: 'underReview' as const, label: 'Under Review Evidence', icon: '/Under_Review_Evidence.svg' },
  { key: 'inProgress' as const, label: 'In Progress Evidence', icon: '/In_Progress_Evidence.svg' },
  { key: 'completed' as const, label: 'Completed Evidence', icon: '/Completed_Evidence.svg' },
];

export default function EvidenceSummaryCards({ evidenceSummary, currentTheme }: EvidenceSummaryCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.key}
          className={cn(
            "rounded-lg p-5 shadow-sm flex items-center gap-4",
            currentTheme === 'dark'
              ? 'bg-card border border-gray-700'
              : 'bg-white border border-gray-200'
          )}
        >
          <div className="shrink-0">
            <Image src={card.icon} alt={card.label} width={24} height={24} />
          </div>
          <div>
            <div className={cn(
              "text-2xl font-bold mb-1",
              currentTheme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>
              {evidenceSummary[card.key]}
            </div>
            <p className={cn(
              "text-sm",
              currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}>{card.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
