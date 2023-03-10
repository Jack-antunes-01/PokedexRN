export type PokemonStatus = {
  hp: number;
  atk: number;
  def: number;
  satk: number;
  sdef: number;
  spd: number;
};

export type StatisticsProps = {
  pokemonStatus: PokemonStatus;
  pokemonType: string;
};

export type AnimationProps = {
  pokemonType: string;
  value: number;
};

const useStatistics = ({ pokemonStatus }: Partial<StatisticsProps>) => {
  const pokemonStatusArr = pokemonStatus && Object.entries(pokemonStatus);

  return { pokemonStatusArr };
};

export { useStatistics };
