'use client';

import { useDashboardStore } from '@/store/use-dashboard-store';

export default function AuditReadiness() {
  const { auditReadiness } = useDashboardStore();
  const { percentage, overdueStandards, missingEvidence } = auditReadiness;

  const radius = 80;
  const strokeWidth = 18;
  const halfCircumference = Math.PI * radius;
  const strokeDashoffset = halfCircumference - (percentage / 100) * halfCircumference;

  return (
    <div className="bg-card rounded-lg p-4 sm:p-6 shadow-sm transition-colors">
      <h2 className="text-base sm:text-lg font-semibold text-card-foreground mb-4 sm:mb-6">
        Audit Readiness
      </h2>

      <div className="flex flex-col items-center justify-center py-3 sm:py-4">
        {/* Half Circle Gauge */}
        <div className="relative w-48 h-28 sm:w-64 sm:h-36">
          <svg
            viewBox={`0 0 ${(radius + strokeWidth) * 2} ${radius + strokeWidth + 10}`}
            className="w-full h-full"
          >
            {/* Background Arc */}
            <path
              d={`M ${strokeWidth} ${radius + strokeWidth} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth} ${radius + strokeWidth}`}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              className="text-gray-200 dark:text-gray-700"
            />
            {/* Progress Arc */}
            <path
              d={`M ${strokeWidth} ${radius + strokeWidth} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth} ${radius + strokeWidth}`}
              stroke="#22c55e"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={halfCircumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-1000"
            />
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-0">
            <span className="text-3xl sm:text-5xl font-bold text-card-foreground">
              {percentage}%
            </span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3">
          Readiness Level
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 mt-4 sm:mt-6 w-full max-w-xs">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-card-foreground">
              {overdueStandards}
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
              Overdue Stds
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-card-foreground">
              {missingEvidence}
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground mt-1">
              Missing Evidence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
