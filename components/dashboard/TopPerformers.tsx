'use client';

import { useDashboardStore } from '@/store/use-dashboard-store';
import Image from 'next/image';

export default function TopPerformers() {
  const { topLeaders } = useDashboardStore();

  return (
    <div className="bg-card rounded-lg p-5 shadow-sm h-full flex flex-col transition-colors">
      <h2 className="text-lg font-semibold text-card-foreground pb-4 border-b border-border">
        Top Performing Perspective Leaders
      </h2>

      <div className="divide-y divide-border pt-4 flex-1">
        {topLeaders.map((leader) => (
          <div key={leader.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
              {/* Avatar */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden shrink-0">
                <Image
                  src={leader.avatar}
                  alt={leader.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name and Perspective */}
              <div className="min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-semibold text-card-foreground truncate">
                  {leader.name}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground truncate">
                  {leader.perspective}
                </p>
              </div>
            </div>

            {/* Score */}
            <div className="text-lg sm:text-xl font-bold text-card-foreground ml-2">
              {leader.score}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
