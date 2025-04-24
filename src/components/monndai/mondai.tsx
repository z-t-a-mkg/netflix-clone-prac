問題 1: TypeScriptで型を定義せよ！
以下のようなTMDB APIのレスポンスを想定して、TypeScriptの型（interface or type）を定義してください。

json
コピーする
編集する
{
  "id": 101,
  "title": "Inception",
  "overview": "A mind-bending thriller",
  "release_date": "2010-07-16",
  "poster_path": "/poster.jpg",
  "vote_average": 8.8
}
要件：
上記データの構造に合わせたTypeScriptの型を定義する。

titleはstring型だが、将来的にnameというキーにも対応できるように工夫すること。

🧠 問題 2: useStateに型をつけよ！
次のようなコードで、useStateに適切な型注釈を追加してください。

tsx
コピーする
編集する
const [movieList, setMovieList] = useState(/* 型をここに書く */)([]);
前問のデータを1つずつ格納した配列になることを想定してください。

🔁 問題 3: useEffectのaxios処理を型安全に書け！
次のようなReactコードがあります。axiosで取得したデータに型を適用して、型安全な形で処理を完成させてください。

tsx
コピーする
編集する
import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [movies, setMovies] = useState</* 型を書く */>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get</* 型を書く */>("https://api.example.com/movies");
      setMovies(response.data.results);
    }
    fetchData();
  }, []);

  return <div>{movies.length} 本の映画を取得しました</div>;
};