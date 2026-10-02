export const ApplicationStatus = {
  Applied: 'Applied',
  Screening: 'Screening',
  Interview: 'Interview',
  Offer: 'Offer',
  Rejected: 'Rejected',
  Withdrawn: 'Withdrawn',
} as const;

export const StatusFilterAll = 'All';

export type ApplicationStatusType =
  (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

export type StatusFilter = typeof StatusFilterAll | ApplicationStatusType;
