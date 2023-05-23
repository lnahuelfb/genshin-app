export interface GenshinWeapon {
  name: string;
  description: string;
  weapontype: string;
  rarity: string;
  story: string;
  baseatk: number;
  substat: string;
  subvalue: string;
  effectname: string;
  effect: string;
  r1: string[];
  r2: string[];
  r3: string[];
  r4: string[];
  r5: string[];
  weaponmaterialtype: string;
  costs: Costs;
  images: Images;
  url: URL;
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

export interface Images {
  nameicon: string;
  namegacha: string;
  icon: string;
  nameawakenicon: string;
  awakenicon: string;
}

export interface URL {
  fandom: string;
}