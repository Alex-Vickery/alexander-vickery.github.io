
export enum PublicationStatus {
  PUBLISHED = 'Published',
  WORKING_PAPER = 'Working Paper',
  WORK_IN_PROGRESS = 'Work in Progress'
}

export interface Publication {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  status: PublicationStatus;
  journal?: string;
  year: string;
  abstract: string;
  bibtex: string;
  paperUrl?: string;
  workingPaperUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
}
