import { Construction } from 'lucide-react';
import Link from 'next/link';

interface WorkInProgressProps {
  title: string;
  description?: string;
}

export default function WorkInProgress({
  title,
  description = 'This page is currently under development.',
}: WorkInProgressProps) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Construction className="w-20 h-20 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
        <p className="text-gray-600 mb-6">{description}</p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
