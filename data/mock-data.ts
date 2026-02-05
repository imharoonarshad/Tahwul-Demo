import {
  TimelineEvent,
  StatCard,
  Perspective,
  LeaderProfile,
  Activity,
  MonthlyPerformance,
  AuditReadiness,
} from '@/types/dashboard';
import { PerspectiveDetail } from '@/types/details';

export const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: 'Mar 17',
    title: 'Kickoff Workshop',
    status: 'completed',
  },
  {
    id: '2',
    date: 'March 18',
    title: 'Data Collection',
    status: 'completed',
  },
  {
    id: '3',
    date: 'May 8',
    title: 'Initial Phase',
    status: 'current',
  },
  {
    id: '4',
    date: 'May 9–July 12',
    title: 'Verification',
    status: 'upcoming',
  },
  {
    id: '5',
    date: 'July 13',
    title: 'Completion Reviews',
    status: 'upcoming',
  },
  {
    id: '6',
    date: 'August 21',
    title: 'Cycle Conclusion',
    status: 'upcoming',
  },
];

export const statCards: StatCard[] = [
  {
    id: '1',
    label: 'Overall Progress',
    value: '78.65%',
    icon: 'trending-up',
  },
  {
    id: '2',
    label: 'Total Criteria',
    value: 95,
    icon: 'clipboard-list',
  },
  {
    id: '3',
    label: 'Completed Criteria',
    value: 52,
    icon: 'check-circle',
  },
  {
    id: '4',
    label: 'Evidence Documents',
    value: 386,
    icon: 'file-text',
  },
  {
    id: '5',
    label: 'Evidence (Completed)',
    value: 302,
    icon: 'file-check',
  },
  {
    id: '6',
    label: 'Uploaded To DGA',
    value: 258,
    icon: 'upload',
  },
];

export const perspectives: Perspective[] = [
  {
    id: 'strategy-planning',
    title: 'Strategy And Planning',
    category: 'Strategic Planning',
    progress: 97.78,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'digital-transformation',
        title: 'Digital Transformation',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
        ],
      },
      {
        id: 'digital-governance',
        title: 'Digital Governance',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'in-progress' },
        ],
      },
      {
        id: 'enterprise-architecture',
        title: 'Enterprise Architecture',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: 'organization-culture',
    title: 'Organization And Culture',
    category: 'Organizational Development',
    progress: 70.83,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'digital-culture',
        title: 'Digital Culture And Environment',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'completed' },
        ],
      },
      {
        id: 'leadership',
        title: 'Leadership Development',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'completed' },
        ],
      },
      {
        id: 'skills-capacity',
        title: 'Skills & Capacity Building',
        criteria: [
          { id: '1', number: 1, status: 'in-progress' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'in-progress' },
        ],
      },
    ],
  },
  {
    id: 'operations-execution',
    title: 'Operations And Execution',
    category: 'Operations',
    progress: 80.0,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'business-processes',
        title: 'Business Processes',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'not-started' },
          { id: '4', number: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: 'business-continuity',
    title: 'Business Continuity',
    category: 'Risk Management',
    progress: 90.59,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'risk-management',
        title: 'Risk Management',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'completed' },
          { id: '5', number: 5, status: 'completed' },
        ],
      },
      {
        id: 'business-continuity',
        title: 'Business Continuity',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'not-started' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'completed' },
          { id: '5', number: 5, status: 'completed' },
          { id: '6', number: 6, status: 'not-started' },
          { id: '7', number: 7, status: 'completed' },
        ],
      },
      {
        id: 'cloud-infrastructure',
        title: 'Cloud Infrastructure',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'fully-uploaded' },
        ],
      },
    ],
  },
  {
    id: 'information-technology',
    title: 'Information Technology',
    category: 'Technology',
    progress: 75.0,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'support-systems',
        title: 'Support Systems',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'completed' },
          { id: '5', number: 5, status: 'completed' },
        ],
      },
      {
        id: 'it-infrastructure',
        title: 'IT Infrastructure',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'completed' },
          { id: '5', number: 5, status: 'fully-uploaded' },
          { id: '6', number: 6, status: 'completed' },
          { id: '7', number: 7, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: 'comprehensive-governance',
    title: 'Comprehensive Governance',
    category: 'Governance',
    progress: 64.44,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'governance-platforms',
        title: 'Governance Platforms',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'not-started' },
          { id: '5', number: 5, status: 'completed' },
          { id: '6', number: 6, status: 'completed' },
          { id: '7', number: 7, status: 'completed' },
          { id: '8', number: 8, status: 'completed' },
          { id: '9', number: 9, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: 'channels-services',
    title: 'Channels And Services',
    category: 'Service Delivery',
    progress: 100,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'service-quality',
        title: 'Service Quality',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
        ],
      },
      {
        id: 'digital-channels',
        title: 'Digital Channels',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'completed' },
          { id: '4', number: 4, status: 'completed' },
        ],
      },
    ],
  },
  {
    id: 'beneficiary-centralization',
    title: 'Beneficiary Centralization',
    category: 'User Experience',
    progress: 60.0,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'user-engagement',
        title: 'User Engagement',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'in-progress' },
          { id: '4', number: 4, status: 'in-progress' },
        ],
      },
      {
        id: 'user-relationship',
        title: 'User Relationship',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'in-progress' },
          { id: '4', number: 4, status: 'in-progress' },
          { id: '5', number: 5, status: 'completed' },
        ],
      },
      {
        id: 'user-experience',
        title: 'User Experience',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'in-progress' },
        ],
      },
    ],
  },
  {
    id: 'government-data',
    title: 'Government Data',
    category: 'Data Management',
    progress: 87.5,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'data-governance',
        title: 'Data Governance',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'in-progress' },
        ],
      },
      {
        id: 'data-usage',
        title: 'Data Usage & Availability',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'in-progress' },
        ],
      },
      {
        id: 'open-data',
        title: 'Open Data',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'completed' },
          { id: '3', number: 3, status: 'in-progress' },
        ],
      },
    ],
  },
  {
    id: 'research-innovation',
    title: 'Research And Innovation',
    category: 'Innovation',
    progress: 17.65,
    color: '#1E3A5F',
    subareas: [
      {
        id: 'innovation',
        title: 'Innovation',
        criteria: [
          { id: '1', number: 1, status: 'delayed' },
          { id: '2', number: 2, status: 'delayed' },
          { id: '3', number: 3, status: 'not-started' },
          { id: '4', number: 4, status: 'not-started' },
        ],
      },
      {
        id: 'creative-solutions',
        title: 'Creative Solutions',
        criteria: [
          { id: '1', number: 1, status: 'completed' },
          { id: '2', number: 2, status: 'in-progress' },
          { id: '3', number: 3, status: 'in-progress' },
        ],
      },
    ],
  },
];

export const topLeaders: LeaderProfile[] = [
  {
    id: '1',
    name: 'Ahmed Al-Ali',
    perspective: 'Strategy Perspective',
    score: 96,
    avatar: '/Ahmed_Al-Ali.svg',
  },
  {
    id: '2',
    name: 'Sarah Al-Khaled',
    perspective: 'Beneficiary Perspective',
    score: 94,
    avatar: '/Sarah_Al-Khaled.svg',
  },
  {
    id: '3',
    name: 'Mohammad Al-Mansour',
    perspective: 'IT Perspective',
    score: 92,
    avatar: '/Mohammad_Al-Mansour.svg',
  },
];

export const recentActivities: Activity[] = [
  {
    id: '1',
    title: 'Document "Strategy_Review.Pdf"',
    description: 'Was Uploaded By Ahmed Khaled',
    user: 'Ahmed Khaled',
    timestamp: '5 Mins Ago',
    type: 'document',
  },
  {
    id: '2',
    title: 'Task "Review Compliance Files"',
    description: 'Was Assigned To Mona Hamed',
    user: 'System',
    timestamp: '20 Mins Ago',
    type: 'task',
  },
  {
    id: '3',
    title: 'New Criterion "5.3 Digital Identity"',
    description: 'Was Created By Admin',
    user: 'Admin',
    timestamp: '1 Hour Ago',
    type: 'criterion',
  },
];

export const monthlyPerformance: MonthlyPerformance[] = [
  { month: 'Jan', value: 88 },
  { month: 'Feb', value: 75 },
  { month: 'Mar', value: 80 },
  { month: 'Apr', value: 42 },
  { month: 'May', value: 90 },
  { month: 'Jun', value: 78 },
  { month: 'Jul', value: 54 },
  { month: 'Aug', value: 87 },
  { month: 'Sept', value: 78 },
  { month: 'Oct', value: 52 },
  { month: 'Nov', value: 90 },
  { month: 'Dec', value: 78 },
];

export const auditReadiness: AuditReadiness = {
  percentage: 80,
  overdueStandards: 12,
  missingEvidence: 5,
};

// Detail page mock data
export const perspectiveDetails: { [key: string]: PerspectiveDetail } = {
  'strategy-planning': {
    id: 'strategy-planning',
    title: 'Digital Transformation Strategic Planning',
    category: 'Strategy & Planning',
    progress: 100,
    description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
    objective:
      'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
    implementationRequirements: [
      'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
      'B. Strategic Initiatives, Programs, And Performance Indicators.',
      'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
      'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
    ],
    evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    scope: 'All Government Entities.',
    requirements: [
      {
        id: '1',
        title: 'Digital Transformation Strategy',
        description:
          'Develop and implement a comprehensive digital transformation strategy',
        status: 'met',
      },
      {
        id: '2',
        title: 'Governance Framework',
        description: 'Establish digital governance policies and procedures',
        status: 'met',
      },
      {
        id: '3',
        title: 'Enterprise Architecture',
        description: 'Define and maintain enterprise architecture standards',
        status: 'met',
      },
    ],
    evidenceSummary: {
      total: 4,
      inProgress: 2,
      underReview: 3,
      completed: 1,
    },
    evidence: [
      {
        id: '1',
        title: 'Digital Transformation Roadmap 2024-2026',
        description: 'Comprehensive strategy document outlining digital initiatives',
        status: 'completed',
        uploadedBy: 'Ahmed Al-Ali',
        uploadedDate: '2024-01-15',
        fileUrl: '/documents/dt-roadmap.pdf',
      },
      {
        id: '2',
        title: 'Governance Framework Documentation',
        description: 'Policies and procedures for digital governance',
        status: 'completed',
        uploadedBy: 'Sarah Al-Khaled',
        uploadedDate: '2024-02-10',
        fileUrl: '/documents/governance-framework.pdf',
      },
      {
        id: '3',
        title: 'Enterprise Architecture Blueprint',
        description: 'Current state and target state architecture documents',
        status: 'in-progress',
        uploadedBy: 'Mohammad Al-Mansour',
        uploadedDate: '2024-03-05',
      },
    ],
    evidenceDocumentsList: [
      {
        id: '1',
        documentNumber: '5.4.1.1',
        documentName: 'Digital_Transformation_Plan.Pdf',
        documentLead: 'Ahmed Khaled',
        documentPreparer: 'Ahmed Khaled',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Approved',
      },
      {
        id: '2',
        documentNumber: '5.4.1.2',
        documentName: 'KPI_Framework.Xlsx',
        documentLead: 'Mona Hamed',
        documentPreparer: 'Mona Hamed',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review',
      },
      {
        id: '3',
        documentNumber: '5.4.1.3',
        documentName: 'Roadmap_Version1.Docx',
        documentLead: 'Rami AlSharif',
        documentPreparer: 'Rami AlSharif',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review',
      },
    ],
    comments: [
      {
        id: '1',
        author: 'Sara Ibrahim',
        authorInitial: 'E',
        text: 'Ensure The Plan Includes A Clear Governance Model.',
        date: '2025-08-05',
      },
      {
        id: '2',
        author: 'Mona Hamed',
        authorInitial: 'M',
        text: 'Ensure The Plan Includes A Clear Governance Model.',
        date: '2025-08-05',
      },
    ],
    recentActivities: [
      {
        id: '1',
        title: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
        description: '',
        timestamp: '5 Mins Ago',
      },
      {
        id: '2',
        title: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
        description: '',
        timestamp: '20 Mins Ago',
      },
      {
        id: '3',
        title: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
        description: '',
        timestamp: '1 Hour Ago',
      },
    ],
    owners: [
      {
        id: '1',
        name: 'Ahmed Al-Ali',
        role: 'Strategy Perspective',
        avatar: '/Ahmed_Al-Ali.svg',
        email: 'ahmed.alali@tahwul.sa',
      },
      {
        id: '2',
        name: 'Ahmed Al-Ali',
        role: 'Strategy Perspective',
        avatar: '/Sarah_Al-Khaled.svg',
        email: 'sarah.alkhaled@tahwul.sa',
      },
    ],
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    lastUpdated: '2024-03-20',
  },
  'digital-transformation': {
    id: 'digital-transformation',
    title: 'Digital Transformation Strategic Planning',
    category: 'Strategy & Planning',
    progress: 100,
    description: 'Develop Comprehensive Strategic Plans For Digital Transformation Aligned With Organizational Goals',
    objective:
      'Develop A Digital Transformation Strategy Aligned With The Organization\'s Strategy And The Objectives Of Saudi Vision 2030.',
    implementationRequirements: [
      'A. The Organization\'s Vision, Mission, Strategic Pillars, And Strategic Objectives, And Their Alignment With The Organization\'s Overall Strategy.',
      'B. Strategic Initiatives, Programs, And Performance Indicators.',
      'C. A Clear Methodology For Integration And Coordination With Relevant External Entities To Achieve The Strategy\'s Objectives.',
      'D. Required Competencies, Capabilities, And Skills Necessary To Achieve The Strategy\'s Objectives.',
    ],
    evidenceDocuments: 'Submit The Approved Digital Transformation Strategy That Includes All The Requirements Of This Standard, Provided That It Has Been Approved Within A Period Not Exceeding 36 Months.',
    relatedRegulations: 'Council Of Ministers Resolution No. (40) Dated 27/2/1427H, Clause (16).',
    scope: 'All Government Entities.',
    requirements: [
      {
        id: '1',
        title: 'Digital Transformation Strategy',
        description:
          'Develop and implement a comprehensive digital transformation strategy',
        status: 'met',
      },
      {
        id: '2',
        title: 'Governance Framework',
        description: 'Establish digital governance policies and procedures',
        status: 'met',
      },
      {
        id: '3',
        title: 'Enterprise Architecture',
        description: 'Define and maintain enterprise architecture standards',
        status: 'met',
      },
    ],
    evidenceSummary: {
      total: 4,
      inProgress: 2,
      underReview: 3,
      completed: 1,
    },
    evidence: [
      {
        id: '1',
        title: 'Digital Transformation Roadmap 2024-2026',
        description: 'Comprehensive strategy document outlining digital initiatives',
        status: 'completed',
        uploadedBy: 'Ahmed Al-Ali',
        uploadedDate: '2024-01-15',
        fileUrl: '/documents/dt-roadmap.pdf',
      },
      {
        id: '2',
        title: 'Governance Framework Documentation',
        description: 'Policies and procedures for digital governance',
        status: 'completed',
        uploadedBy: 'Sarah Al-Khaled',
        uploadedDate: '2024-02-10',
        fileUrl: '/documents/governance-framework.pdf',
      },
      {
        id: '3',
        title: 'Enterprise Architecture Blueprint',
        description: 'Current state and target state architecture documents',
        status: 'in-progress',
        uploadedBy: 'Mohammad Al-Mansour',
        uploadedDate: '2024-03-05',
      },
    ],
    evidenceDocumentsList: [
      {
        id: '1',
        documentNumber: '5.4.1.1',
        documentName: 'Digital_Transformation_Plan.Pdf',
        documentLead: 'Ahmed Khaled',
        documentPreparer: 'Ahmed Khaled',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Approved',
      },
      {
        id: '2',
        documentNumber: '5.4.1.2',
        documentName: 'KPI_Framework.Xlsx',
        documentLead: 'Mona Hamed',
        documentPreparer: 'Mona Hamed',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review',
      },
      {
        id: '3',
        documentNumber: '5.4.1.3',
        documentName: 'Roadmap_Version1.Docx',
        documentLead: 'Rami AlSharif',
        documentPreparer: 'Rami AlSharif',
        date: '2025-08-01',
        dueDate: '2025-08-01',
        status: 'Pending Review',
      },
    ],
    comments: [
      {
        id: '1',
        author: 'Sara Ibrahim',
        authorInitial: 'E',
        text: 'Ensure The Plan Includes A Clear Governance Model.',
        date: '2025-08-05',
      },
      {
        id: '2',
        author: 'Mona Hamed',
        authorInitial: 'M',
        text: 'Ensure The Plan Includes A Clear Governance Model.',
        date: '2025-08-05',
      },
    ],
    recentActivities: [
      {
        id: '1',
        title: 'Roadmap_Version1.Docx Uploaded By Rami AlSharif',
        description: '',
        timestamp: '5 Mins Ago',
      },
      {
        id: '2',
        title: 'KPI_Framework.Xlsx Uploaded By Mona Hamed',
        description: '',
        timestamp: '20 Mins Ago',
      },
      {
        id: '3',
        title: 'Digital_Transformation_Plan.Pdf Approved By Advisory Team',
        description: '',
        timestamp: '1 Hour Ago',
      },
    ],
    owners: [
      {
        id: '1',
        name: 'Ahmed Al-Ali',
        role: 'Strategy Perspective',
        avatar: '/Ahmed_Al-Ali.svg',
        email: 'ahmed.alali@tahwul.sa',
      },
      {
        id: '2',
        name: 'Ahmed Al-Ali',
        role: 'Strategy Perspective',
        avatar: '/Sarah_Al-Khaled.svg',
        email: 'sarah.alkhaled@tahwul.sa',
      },
    ],
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    lastUpdated: '2024-03-20',
  },
};
