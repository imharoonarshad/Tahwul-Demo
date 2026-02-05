'use client';

export default function ComplianceScore() {
  const percentage = 65;
  const radius = 80;
  const strokeWidth = 18;
  // Half circle: only use PI (180 degrees) instead of 2*PI (360 degrees)
  const halfCircumference = Math.PI * radius;
  const strokeDashoffset = halfCircumference - (percentage / 100) * halfCircumference;

  return (
    <div className="bg-card rounded-lg p-5 shadow-sm h-full flex flex-col transition-colors">
      <h2 className="text-lg font-semibold text-card-foreground pb-4 border-b border-border">
        Overall Compliance Score
      </h2>

      <div className="flex flex-col items-center justify-center py-6 sm:py-8 flex-1">
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
              className="text-muted"
            />
            {/* Progress Arc */}
            <path
              d={`M ${strokeWidth} ${radius + strokeWidth} A ${radius} ${radius} 0 0 1 ${radius * 2 + strokeWidth} ${radius + strokeWidth}`}
              stroke="#b91c1c"
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
          Basic Standards 2025
        </p>
      </div>
    </div>
  );
}
