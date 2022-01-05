export interface IRepo {
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  fork: boolean;
  created_at: string;
  archived: boolean;
}

export interface IRecentRepo {
  name: string;
  desc: string;
  link: string;
}

export interface ILink {
  name: string;
  url: string;
}