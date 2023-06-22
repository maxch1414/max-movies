"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { GetMovies } from "./utils/getMovies";

async function GetMovies() {
  const url =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
    },
  };

  const movies = await fetch(url, options);
  if (!movies) throw new Error("Error, please try again");
  return movies.json();
}

export default function Home() {
  const { isLoading, isFetching, error, data } = useQuery({
    queryKey: ["movies"],
    queryFn: () => GetMovies(),
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div>
          {data.map((movie) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
