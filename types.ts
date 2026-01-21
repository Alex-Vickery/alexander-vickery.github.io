export enum PublicationStatus {
  PUBLISHED = "Published",
  WORKING_PAPER = "Working Paper",
  WORK_IN_PROGRESS = "Work in Progress",
}

export interface Author {
  name: string;
  url?: string;
}

export interface Publication {
  id: string;
  title: string;
  subtitle?: string;
  authors: Author[];
  status: PublicationStatus;
  journal?: string;
  year: string;
  abstract: string;
  highlights?: string[];
  methodology?: string;
  jelCodes?: string[];
  resultsFigureUrl?: string;
  resultsFigureTitle?: string;
  resultsFigureExplanation?: string;
  bibtex: string;
  paperUrl?: string;
  workingPaperUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
}
