export interface Evidence {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'under-review' | 'not-started';
  uploadedBy?: string;
  uploadedDate?: string;
  fileUrl?: string;
}

export interface EvidenceDocument {
  id: string;
  documentNumber: string;
  documentName: string;
  documentLead: string;
  documentPreparer: string;
  date: string;
  dueDate: string;
  status: 'Approved' | 'Pending Review' | 'Rejected';
}

export interface Comment {
  id: string;
  author: string;
  authorInitial: string;
  text: string;
  date: string;
}

export interface RecentActivity {
  id: string;
  title: string;
  description: string;
  timestamp: string;
}

export interface EvidenceSummary {
  total: number;
  inProgress: number;
  underReview: number;
  completed: number;
}

export interface Requirement {
  id: string;
  title: string;
  description: string;
  status: 'met' | 'partial' | 'not-met';
}

export interface Owner {
  id: string;
  name: string;
  role: string;
  avatar: string;
  email: string;
}

export interface PerspectiveDetail {
  id: string;
  title: string;
  category: string;
  progress: number;
  description: string;
  objective: string;
  implementationRequirements: string[];
  evidenceDocuments: string;
  relatedRegulations: string;
  scope: string;
  requirements: Requirement[];
  evidenceSummary: EvidenceSummary;
  evidence: Evidence[];
  evidenceDocumentsList: EvidenceDocument[];
  comments: Comment[];
  recentActivities: RecentActivity[];
  owners: Owner[];
  startDate: string;
  endDate: string;
  lastUpdated: string;
}
