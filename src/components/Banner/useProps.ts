import { useEffect, useState } from "react";
import axios from "../../axios";
import { requests } from "../../request";
import { Movie } from "../../type";

export const useProps = () => {
  const [movie,setMovie] = useState<Movie>();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      const results = request.data.results;

      const filtered = results.filter((m) => m.backdrop_path);
      const random = Math.floor(Math.random() * filtered.length);
      setMovie(filtered[random]);
    }

    fetchData();
  }, []);

const truncate = (str: string | undefined, n: number): string => {
  if (!str) {
    return "";
  }
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
};

return {
  movie,
  truncate,
};
};