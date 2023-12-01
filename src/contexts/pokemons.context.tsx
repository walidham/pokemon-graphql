import { createContext, useState, useEffect } from "react";

import { gql, useQuery } from "@apollo/client";
import Pokemon from "../models/pokemon";

interface PokemonContextValues {
  pokemonsMap: Pokemon[];
  loading: boolean;
  totalPages:number;
}

export const PokemonsContext = createContext<PokemonContextValues>({
  pokemonsMap: [],
  loading: false,
  totalPages:0,
});

const POKEMONS = gql`
  query {
    pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { name: {} } }
      order_by: { id: asc }
    ) {
      name
      id
    }
  }
`;

export const PokemonsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  console.log("init1");
  const { loading, error, data } = useQuery(POKEMONS);

  const [pokemonsMap, setPokemonsMap] = useState([]);

  useEffect(() => {
    if (data) {
      const { pokemon_v2_pokemonspecies } = data;
      console.log("111111");
      setPokemonsMap(pokemon_v2_pokemonspecies);
    }
  }, [data]);

  const value = { pokemonsMap, loading, totalPages:0};
  return (
    <PokemonsContext.Provider value={value}>
      {children}
    </PokemonsContext.Provider>
  );
};
