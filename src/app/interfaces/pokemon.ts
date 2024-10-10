export interface IPokemon {
  sprites: any;
  name: string;
  url: string;
}

export interface IRoot {
  ability: IAbility;
  is_hidden: boolean;
  slot: number;
}

export interface IRootStats {
  base_stat: number;
  effort: number;
  stat: Stat;
}

export interface Stat {
  name: string;
  url: string;
}

export interface IAbility {
  name: string;
  url: string;
}
export interface ISprites {
  other: {
    home: {
      front_default: string | undefined;
    };
  };
}

export interface IPokemonDetail {
  abilities: IRoot[];
  height: number;
  weight: number;
  name: string;
  sprites: ISprites;
  stats: IRootStats[];
  base_experience: number;
}

export interface IPokemonFavorite extends IPokemonAndImage {
  abilities: IRoot[];
}

export interface IPokemonAndImage {
  count: number;
  name: string;
  image: string;
}

export interface IResultPokemon {
  count: number;
  next: string;
  previous: string;
  results: IPokemon[];
}
