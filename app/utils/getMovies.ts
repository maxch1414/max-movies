import axios from "axios";

export async function GetMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  const movies = await axios.get(url, options);
  if (!movies) throw new Error("Error, please try again");
  return movies.data;
}
