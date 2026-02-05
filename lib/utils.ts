import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function getStatusColor(
  status:
    | 'completed'
    | 'in-progress'
    | 'not-started'
    | 'delayed'
    | 'partially-uploaded'
    | 'fully-uploaded'
    | 'under-review'
): string {
  switch (status) {
    case 'completed':
      return 'bg-green-500';
    case 'in-progress':
      return 'bg-yellow-500';
    case 'not-started':
      return 'bg-gray-400';
    case 'delayed':
      return 'bg-red-500';
    case 'partially-uploaded':
      return 'bg-yellow-500';
    case 'fully-uploaded':
      return 'bg-blue-500';
    case 'under-review':
      return 'bg-orange-500';
    default:
      return 'bg-gray-400';
  }
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
