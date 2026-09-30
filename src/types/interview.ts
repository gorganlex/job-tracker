import type { ISOdate } from './common';

export interface InterviewRound {
  id: string;
  date: ISOdate;
  type: InterviewType;
  notes?: string;
}

export type InterviewType =
  | 'Screening'
  | 'Technical'
  | 'System design'
  | 'Take-home'
  | 'Behavioral'
  | 'Final';
