'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { Owner } from '@/types/details';

interface LeadersCardProps {
  owners: Owner[];
  currentTheme: string | undefined;
}

export default function LeadersCard({ owners, currentTheme }: LeadersCardProps) {
  return (
    <div className={cn(
      "rounded-lg shadow-sm p-6",
      currentTheme === 'dark' ? 'bg-card' : 'bg-white'
    )}>
      <h3 className={cn(
        "text-lg font-semibold mb-4",
        currentTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
      )}>
        Leaders
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {owners.map((owner) => (
          <div
            key={owner.id}
            className={cn(
              "flex items-center gap-3 p-4 rounded-lg",
              currentTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            )}
          >
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
              <Image
                src={owner.avatar}
                alt={owner.name}
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className={cn(
                "font-medium text-sm",
                currentTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
              )}>
                {owner.name}
              </p>
              <p className={cn(
                "text-xs",
                currentTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              )}>
                {owner.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
