'use client';

import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PerspectiveDetail } from '@/types/details';

interface PerspectiveHeaderProps {
  detail: PerspectiveDetail;
  currentTheme: string | undefined;
  onBack: () => void;
}

export default function PerspectiveHeader({ detail, currentTheme, onBack }: PerspectiveHeaderProps) {
  return (
    <>
      {/* Back Button */}
      <button
        onClick={onBack}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium transition-colors",
          currentTheme === 'dark'
            ? 'text-blue-400 hover:text-blue-300'
            : 'text-blue-600 hover:text-blue-700'
        )}
      >
        <ArrowLeft className="w-4 h-4" />
        {detail.title}
      </button>

      {/* Header Section */}
      <div className={cn(
        "rounded-lg shadow-sm p-6",
        currentTheme === 'dark' ? 'bg-card' : 'bg-white'
      )}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className={cn(
              "text-xs font-medium mb-2 inline-block px-3 py-1 rounded-full border",
              currentTheme === 'dark'
                ? 'text-gray-400 border-gray-600'
                : 'text-gray-500 border-gray-300'
            )}>
              {detail.category}
            </div>
            <h1 className={cn(
              "text-2xl md:text-3xl font-bold mb-2",
              currentTheme === 'dark' ? 'text-white' : 'text-gray-900'
            )}>
              {detail.title}
            </h1>
            <p className={cn(
              "text-sm",
              currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            )}>
              {detail.description}
            </p>
          </div>

          {/* Progress Circle */}
          <div className="shrink-0">
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <svg className="transform -rotate-90 w-full h-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  stroke={currentTheme === 'dark' ? '#374151' : '#e5e7eb'}
                  strokeWidth="8"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="35%"
                  stroke="#10b981"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 35} ${2 * Math.PI * 35}`}
                  strokeDashoffset={2 * Math.PI * 35 * (1 - detail.progress / 100)}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={cn(
                  "text-base md:text-lg font-bold",
                  currentTheme === 'dark' ? 'text-white' : 'text-gray-900'
                )}>
                  {detail.progress}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
