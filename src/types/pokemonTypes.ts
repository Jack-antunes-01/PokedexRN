export type PokemonTypes = {
  id: string;
  image: string;
  name: string;
  type: string[];
  weight: number;
  height: number;
  moves: string[];
  description: string;
  status: PokemonTypesStatus;
};

export type PokemonTypesStatus = {
  hp: number;
  atk: number;
  def: number;
  satk: number;
  sdef: number;
  spd: number;
};
