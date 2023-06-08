import client from ".";
import { type AxiosResponse } from "axios";

import { type IPokemon } from "~/types/pokemon";

// const pokeURL = {
//   pokemon: "/pokemon/",
// };

export const pokeController = {
  getPokemon: (url: string) => {
    return client
      .get(url)
      .then((response: AxiosResponse<IPokemon>) => response.data);
  },
};
