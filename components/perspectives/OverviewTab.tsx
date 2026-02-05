'use client';

import { cn } from '@/lib/utils';
import type { PerspectiveDetail } from '@/types/details';

interface OverviewTabProps {
  detail: PerspectiveDetail;
  currentTheme: string | undefined;
}

interface SectionRowProps {
  title: string;
  currentTheme: string | undefined;
  children: React.ReactNode;
}

function SectionRow({ title, currentTheme, children }: SectionRowProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className={cn(
        "md:w-64 p-4 rounded-lg shrink-0",
        currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
      )}>
        <h3 className={cn(
          "text-sm font-semibold",
          currentTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
        )}>
          {title}
        </h3>
      </div>
      <div className={cn(
        "hidden md:block w-px self-stretch",
        currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
      )} />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export default function OverviewTab({ detail, currentTheme }: OverviewTabProps) {
  const textClass = cn(
    "text-sm leading-relaxed",
    currentTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
  );

  return (
    <div className={cn(
      "rounded-lg shadow-sm p-6 space-y-6",
      currentTheme === 'dark' ? 'bg-card' : 'bg-white'
    )}>
      {/* Objective */}
      <SectionRow title="Objective" currentTheme={currentTheme}>
        <p className={textClass}>{detail.objective}</p>
      </SectionRow>

      {/* Implementation Requirements */}
      <SectionRow title="Implementation Requirements" currentTheme={currentTheme}>
        <div className={cn(textClass, "space-y-2")}>
          {detail.implementationRequirements.map((req, idx) => (
            <p key={idx}>{req}</p>
          ))}
        </div>
      </SectionRow>

      {/* Evidence Documents */}
      <SectionRow title="Evidence Documents" currentTheme={currentTheme}>
        <p className={textClass}>{detail.evidenceDocuments}</p>
      </SectionRow>

      {/* Related Regulations */}
      <SectionRow title="Related Regulations" currentTheme={currentTheme}>
        <p className={textClass}>{detail.relatedRegulations}</p>
      </SectionRow>

      {/* Scope */}
      <SectionRow title="Scope" currentTheme={currentTheme}>
        <p className={textClass}>{detail.scope}</p>
      </SectionRow>
    </div>
  );
}
