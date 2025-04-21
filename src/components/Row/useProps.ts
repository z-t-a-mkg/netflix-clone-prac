// useProps.ts：コンポーネントのロジック部分を定義している
import { useEffect, useState } from "react";
import axios from "../../axios";


export type Movie = {
    id: string;
    name: string;
    poster_path: string;
    backdrop_path: string;
};

export const useProps = (fetchUrl:string) => {
    const [movies,setMovies] =  useState<Movie[]>([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            const movies = request.data.results.map((movie: Movie) => ({
                id: movie.id,
                name: movie.name,
                poster_path: movie.poster_path,
                backdrop_path: movie.backdrop_path,
        }));
        console.log("変換前のデータ:", request.data.results); // ← ここ！
        console.log("変換後のmovies:", movies); // ← ここ！
            setMovies(movies);
            return request;
        }
        fetchData();

    },[fetchUrl]);

    // return movies; <-この場合、画像表示できない。
    return {movies};
}

