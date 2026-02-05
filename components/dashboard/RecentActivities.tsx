'use client';

import { useDashboardStore } from '@/store/use-dashboard-store';

export default function RecentActivities() {
  const { recentActivities } = useDashboardStore();

  return (
    <div className="bg-card rounded-lg p-5 shadow-sm h-full flex flex-col transition-colors">
      <h2 className="text-lg font-semibold text-card-foreground pb-4 border-b border-border">
        Recent Activities
      </h2>

      <div className="divide-y divide-border pt-4 flex-1">
        {recentActivities.map((activity) => {
          return (
            <div key={activity.id} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
              {/* Icon */}
              <div className="w-2 h-2 bg-red-500 dark:bg-red-400 rounded-full mt-1.5 sm:mt-2 shrink-0"></div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs sm:text-sm font-medium text-card-foreground break-words">
                  {activity.title}
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground break-words">
                  {activity.description}
                </p>
              </div>

              {/* Timestamp */}
              <span className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap shrink-0 mt-0.5">
                {activity.timestamp}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
