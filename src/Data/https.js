import axios from "axios";

export const mainURL = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
