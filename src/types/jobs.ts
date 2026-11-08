export type JobFormData = {
  jobTitle: string;
  company: string;
  location: string;
  category: string;
  level: string;
  jobType: string;
  workMode: string;

  description: string;
  requirements: string;
  skills: string;

  benefits: string[];

  salaryMin: string;
  salaryMax: string;
  currency: string;
  period: string;

  deadline: string;
  openings: string;
  applyEmail: string;
};