import React from "react";
import Image from "next/image";
import { Card, Container, Grid } from "@nextui-org/react";
import useSWR from "swr";

import { STAT_COLOR, TYPE_COLOR } from "~/constants/pokemon";
import { pokeController } from "~/networking/pokeControllers";
import { type IPokemon } from "~/types/pokemon";
import { formatPokeStat } from "~/utilities/format";

const Home: React.FC = () => {
  const [pokeList, setPokeList] = React.useState<IPokemon[]>([]);

  const fetcher = () => {
    const urlArray: string[] = [];
    for (let i = 1; i <= 9; i++) {
      urlArray.push("/pokemon/" + `${i}`);
    }
    return Promise.all(urlArray.map((url) => pokeController.getPokemon(url)));
  };

  const { data, error, isLoading } = useSWR("/pokemon/", fetcher);

  const splitPokeList = React.useCallback(() => {
    if (data && !error) {
      const virtualPokeList = structuredClone(data);
      if (pokeList.length <= virtualPokeList.length) {
        const slicePokeList = virtualPokeList.slice(
          pokeList.length,
          pokeList.length + 10
        );
        const newPokeList = pokeList.concat(slicePokeList);
        setPokeList(newPokeList);
      }
    }
  }, [data, error]);

  React.useEffect(() => {
    splitPokeList();
  }, [splitPokeList]);

  console.log("virtualPokeList", pokeList);

  return (
    <Container className="mt-5" lg display="flex">
      <Grid.Container gap={2} justify="center">
        {pokeList?.map((pokemon) => (
          <Grid key={pokemon.id} xs={12} sm={4}>
            <Card className="relative aspect-10/16 overflow-hidden rounded-2xl border-2 border-blue-400">
              <div className="screen-overlay" />
              <div className="relative z-10 m-2 flex grow flex-col items-center justify-end rounded-lg border-1 border-blue-400">
                <h1 className="text-3xl font-bold uppercase drop-shadow-[0px_0px_1rem_#0C69C8]">
                  #{pokemon.id.toString().padStart(4, "0")}
                </h1>
                <Image
                  width={200}
                  height={200}
                  src={pokemon.sprites.other.home.front_default}
                  alt={`pokemon-${pokemon.id}`}
                />
                <h1 className="text-3xl font-bold uppercase drop-shadow-[0px_0px_1rem_#0C69C8]">
                  {pokemon.name}
                </h1>

                <h2 className="flex flex-col items-center font-semibold">
                  Type
                  <div className="flex flex-row">
                    {pokemon.types.map((type) => (
                      <div
                        key={type.type.name}
                        className={`m-1 rounded-full ${
                          TYPE_COLOR[type.type.name]
                        } p-2`}
                      >
                        <Image
                          width={25}
                          height={25}
                          src={`icons/type/${type.type.name}.svg`}
                          alt={`type-${type.type.name}`}
                        />
                      </div>
                    ))}
                  </div>
                </h2>

                <div className="flex flex-row items-center">
                  <div className="mx-2 flex flex-col items-center">
                    <p className="font-mono font-semibold">Weight</p>
                    <p className="font-mono text-sm">
                      {pokemon.weight / 10} kg
                    </p>
                  </div>
                  <div className="mx-2 flex flex-col items-center">
                    <p className="font-mono font-semibold">Height</p>
                    <p className="font-mono text-sm">{pokemon.height / 10} m</p>
                  </div>
                </div>

                <h2 className="flex flex-col items-center font-semibold">
                  Base stats
                  <Grid.Container gap={1} justify="center">
                    {pokemon.stats.map((stat) => (
                      <Grid key={stat.stat.name} xs={6} justify="space-between">
                        <p
                          className={`font-mono text-sm capitalize ${
                            STAT_COLOR[formatPokeStat(stat.stat.name, "_")]
                          }`}
                        >
                          {formatPokeStat(stat.stat.name, ".")}
                        </p>
                        <p
                          className={`font-mono text-sm capitalize ${
                            STAT_COLOR[formatPokeStat(stat.stat.name, "_")]
                          }`}
                        >
                          {stat.base_stat}
                        </p>
                      </Grid>
                    ))}
                  </Grid.Container>
                </h2>
              </div>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Home;
