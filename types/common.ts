export type StatusType =
  | 'not-started'
  | 'in-progress'
  | 'completed'
  | 'delayed'
  | 'partially-uploaded'
  | 'fully-uploaded'
  | 'under-review';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  active?: boolean;
}
