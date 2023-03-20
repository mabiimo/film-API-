import axios from "axios";

export const getMovieList = async () => {
  const movie = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=6668c3c42467942ec803ae92a56f9a0c");
  return movie.data.results;
};

export const category = async () => {
  const kategori = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6668c3c42467942ec803ae92a56f9a0c");
  return kategori.data.hasil;
};

export const searchMovie = async (q) => {
  const movie = await axios.get(q);
  return;
};
