'use client';

import { useDashboardStore } from '@/store/use-dashboard-store';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ProjectTimeline() {
  const { timelineEvents, selectedYear, setSelectedYear } = useDashboardStore();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : 'light';

  return (
    <div className="bg-white dark:bg-card rounded-lg p-6 shadow-sm border border-gray-100 dark:border-border transition-colors">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-foreground">
          Project Timeline
        </h2>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(Number(e.target.value))}
          className={cn(
            "px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors shadow-sm",
            currentTheme === 'dark'
              ? "bg-slate-700 border-gray-600 text-white"
              : "bg-gray-50 border-gray-200 text-gray-900"
          )}
        >
          <option value={2026}>2026</option>
          <option value={2025}>2025</option>
          <option value={2024}>2024</option>
        </select>
      </div>

      {/* Timeline - Desktop */}
      <div className="relative hidden md:block py-12 overflow-visible px-5">
        {/* Timeline Line */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-4 bg-[#F5F8FB] dark:bg-[#F5F8FB] rounded-full">
          <div className="absolute top-0 left-0 h-full bg-green-500 w-[33%] rounded-full"></div>
        </div>

        {/* Timeline Events */}
        <div className="relative flex justify-between px-4">
          {timelineEvents.map((event, index) => (
            <div
              key={event.id}
              className="flex flex-col items-center relative"
            >
              {/* Dot - centered on the line */}
              <div
                className={cn(
                  'w-3.5 h-3.5 rounded-full z-10 relative',
                  event.status === 'completed' && 'bg-white',
                  event.status === 'current' && 'bg-red-500',
                  event.status === 'upcoming' && 'bg-red-500',
                  event.status === 'delayed' && 'bg-red-500'
                )}
              ></div>

              {/* Date and Title - below the timeline */}
              <div className="text-center absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <p className="text-sm text-[#8597A8] mb-1">
                  {event.date}
                </p>
                <p className="text-sm font-medium text-[#1D3557] dark:text-gray-300">
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline - Mobile/Tablet */}
      <div className="md:hidden space-y-3 overflow-x-auto">
        {timelineEvents.map((event) => (
          <div
            key={event.id}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg",
              currentTheme === 'dark' ? "bg-gray-700" : "bg-gray-50"
            )}
          >
            <div
              className={cn(
                'w-3 h-3 rounded-full shrink-0',
                event.status === 'completed' && 'bg-green-500',
                event.status === 'current' && 'bg-red-500',
                event.status === 'upcoming' && 'bg-red-500',
                event.status === 'delayed' && 'bg-red-500'
              )}
            ></div>
            <div className="flex-1 min-w-0">
              <p className={cn(
                "text-sm font-medium truncate",
                currentTheme === 'dark' ? "text-white" : "text-gray-900"
              )}>
                {event.title}
              </p>
              <p className={cn(
                "text-xs",
                currentTheme === 'dark' ? "text-gray-400" : "text-gray-500"
              )}>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
