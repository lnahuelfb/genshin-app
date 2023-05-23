export interface GenshinCharacter {
  name: string;
  fullname: string;
  title: string;
  description: string;
  rarity: string;
  element: string;
  weapontype: string;
  substat: string;
  gender: string;
  body: string;
  association: string;
  region: string;
  affiliation: string;
  birthdaymmdd: string;
  birthday: string;
  constellation: string;
  cv: Cv;
  costs: Costs;
  images: Images;
  version: string;
}

export interface Costs {
  ascend1: Ascend[];
  ascend2: Ascend[];
  ascend3: Ascend[];
  ascend4: Ascend[];
  ascend5: Ascend[];
  ascend6: Ascend[];
}

export interface Ascend {
  name: string;
  count: number;
}

export interface Cv {
  english: string;
  chinese: string;
  japanese: string;
  korean: string;
}

export interface Images {
  nameicon: string;
  nameiconcard: string;
  namegachasplash: string;
  namegachaslice: string;
  icon: string;
  namesideicon: string;
  sideicon: string;
  cover1: string;
  cover2: string;
}