export type User = {
  uid: string;
  name?: string;
  image_url?: string;
  age?: string;
  prefecture?: string;
  university?: string;
  graduateYear?: string;
  self_publicity?: string;
  career_vision?: string;
  position?: string;
  development_experience?: boolean;
  internship_experience?: boolean;
  github?: string;
  programingSkills?: [string];
};

//position, prefectureはcollectionとして管理する。
