import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const client = axios.create({
  baseURL: `${BASE_URL}`,
  timeout: 10000,
});

export default client;
