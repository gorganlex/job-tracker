import { ApplicationStatus } from '../data/applicationStatus';

export const getApplicationDraft = () => ({
  company: '',
  role: '',
  status: ApplicationStatus.APPLIED,
  dateApplied: new Date().toLocaleDateString('sv-SE'),
  tags: [],
});
