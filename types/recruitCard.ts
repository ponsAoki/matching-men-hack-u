export type recruitCard = {
  headline?: string;
  timestamp?: any;
  recruitment_details?: string;
  programing_skills?: skills[];
  user_id?: string;
  tag_id?: any;
  number_of_applicants?: string[];
  development_period?: string;
  hackathon_url?: string;
  recruitment_number?: number;
};

type skills = {
  label: string;
  value: string;
};
