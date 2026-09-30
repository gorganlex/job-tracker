import type { ApplicationStatusType } from '../data/applicationStatus';
import type { ISOdate, ISOdateTime } from './common';
import type { InterviewRound } from './interview';

export interface Application {
  id: string;
  company: string;
  role: string;
  status: ApplicationStatusType;
  dateApplied: ISOdate;
  location?: string;
  workArrangement?: WorkArrangement;
  source?: ApplicationSource;
  url?: string;
  salaryMin?: number | null;
  salaryMax?: number | null;
  favorite: boolean;
  tags: string[];
  interviews: InterviewRound[];
  contactName?: string;
  contactEmail?: string;
  notes?: string;
  nextActionDate?: ISOdate | null;
  createdAt: ISOdateTime;
  updatedAt: ISOdateTime;
}

export type ApplicationDraft = Pick<
  Application,
  | 'id'
  | 'company'
  | 'role'
  | 'status'
  | 'dateApplied'
  | 'tags'
  | 'favorite'
  | 'interviews'
>;

export type WorkArrangement = 'Remote' | 'Hybrid' | 'On-site';

export type ApplicationSource =
  | 'LinkedIn'
  | 'We Work Remotely'
  | 'Remote OK'
  | 'Tecnoempleo'
  | 'InfoJobs'
  | 'Referral'
  | 'Company site'
  | 'Other';
