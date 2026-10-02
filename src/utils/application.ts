import { ApplicationStatus } from '../data/applicationStatus';
import { v4 as uuid } from 'uuid';
import type { ApplicationDraft } from '../types/application';

export const getApplicationDraft = (): ApplicationDraft => ({
  id: uuid(),
  company: '',
  role: '',
  status: ApplicationStatus.Applied,
  dateApplied: new Date().toLocaleDateString('sv-SE'),
  tags: [],
  favorite: false,
  interviews: [],
});
