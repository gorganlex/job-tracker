import { ApplicationStatus } from '../data/applicationStatus';
import { v4 as uuid } from 'uuid';

export const getApplicationDraft = () => ({
  id: uuid(),
  company: '',
  role: '',
  status: ApplicationStatus.APPLIED,
  dateApplied: new Date().toLocaleDateString('sv-SE'),
  tags: [],
  interviews: [],
  favorite: false,
});
