export interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IAbility[];
  forms: IForm[];
  game_indices: IIndex[];
  held_items: IHeldItem[];
  location_area_encounters: string;
  moves: IMfe[];
  species: ISpecies;
  sprites: ISprites;
  stats: IStat[];
  types: IType[];
  past_types: IPastType[];
}

export interface IAbility {
  is_hidden: boolean;
  slot: number;
  ability: IAbility2;
}

export interface IAbility2 {
  name: string;
  url: string;
}

export interface IForm {
  name: string;
  url: string;
}

export interface IIndex {
  game_index: number;
  version: IVersion;
}

export interface IVersion {
  name: string;
  url: string;
}

export interface IHeldItem {
  item: IItem;
  version_details: IVersionDetail[];
}

export interface IItem {
  name: string;
  url: string;
}

export interface IVersionDetail {
  rarity: number;
  version: IVersion2;
}

export interface IVersion2 {
  name: string;
  url: string;
}

export interface IMfe {
  move: IMove;
  version_group_details: IVersionGroupDetail[];
}

export interface IMove {
  name: string;
  url: string;
}

export interface IVersionGroupDetail {
  level_learned_at: number;
  version_group: IVersionGroup;
  move_learn_method: IMoveLearnMethod;
}

export interface IVersionGroup {
  name: string;
  url: string;
}

export interface IMoveLearnMethod {
  name: string;
  url: string;
}

export interface ISpecies {
  name: string;
  url: string;
}

export interface ISprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: IOther;
  versions: IVersions;
}

export interface IOther {
  dream_world: IDreamWorld;
  home: IHome;
  official_artwork: IOfficialArtwork;
}

export interface IDreamWorld {
  front_default: string;
  front_female: any;
}

export interface IHome {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IOfficialArtwork {
  front_default: string;
}

export interface IVersions {
  generation_i: IGenerationI;
  generation_ii: IGenerationIi;
  generation_iii: IGenerationIii;
  generation_iv: IGenerationIv;
  generation_v: IGenerationV;
  generation_vi: IGenerationVi;
  generation_vii: IGenerationVii;
  generation_viii: IGenerationViii;
}

export interface IGenerationI {
  red_blue: IRedBlue;
  yellow: IYellow;
}

export interface IRedBlue {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface IYellow {
  back_default: string;
  back_gray: string;
  front_default: string;
  front_gray: string;
}

export interface IGenerationIi {
  crystal: ICrystal;
  gold: IGold;
  silver: ISilver;
}

export interface ICrystal {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IGold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface ISilver {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IGenerationIii {
  emerald: IEmerald;
  firered_leafgreen: IFireredLeafgreen;
  ruby_sapphire: IRubySapphire;
}

export interface IEmerald {
  front_default: string;
  front_shiny: string;
}

export interface IFireredLeafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IRubySapphire {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

export interface IGenerationIv {
  diamond_pearl: IDiamondPearl;
  heartgold_soulsilver: IHeartgoldSoulsilver;
  platinum: IPlatinum;
}

export interface IDiamondPearl {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IHeartgoldSoulsilver {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IPlatinum {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IGenerationV {
  black_white: IBlackWhite;
}

export interface IBlackWhite {
  animated: IAnimated;
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IAnimated {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IGenerationVi {
  omegaruby_alphasapphire: IOmegarubyAlphasapphire;
  x_y: XY;
}

export interface IOmegarubyAlphasapphire {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface XY {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IGenerationVii {
  icons: IIcons;
  ultra_sun_ultra_moon: IUltraSunUltraMoon;
}

export interface IIcons {
  front_default: string;
  front_female: any;
}

export interface IUltraSunUltraMoon {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface IGenerationViii {
  icons: IIcons2;
}

export interface IIcons2 {
  front_default: string;
  front_female: any;
}

export interface IStat {
  base_stat: number;
  effort: number;
  stat: IStat2;
}

export interface IStat2 {
  name: string;
  url: string;
}

export interface IType {
  slot: number;
  type: IType2;
}

export interface IType2 {
  name: string;
  url: string;
}

export interface IPastType {
  generation: IGeneration;
  types: IType3[];
}

export interface IGeneration {
  name: string;
  url: string;
}

export interface IType3 {
  slot: number;
  type: IType4;
}

export interface IType4 {
  name: string;
  url: string;
}
