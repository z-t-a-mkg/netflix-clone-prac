
// import axios from "../../axios";
import { useProps } from "./useProps";
import { Layout } from "./Layout";



// index.tsx：コンポーネントのエントリポイントを定義している。他の2つのファイルをインポートして、統合した形でエクスポートする役割

type Pros = {
    title:string;
    fetchUrl:string;
    isLargeRow?:boolean;
};


export const Row =({title,fetchUrl,isLargeRow}:Pros) =>{
    return(
        <Layout title={title} isLargeRow = {isLargeRow} {...useProps(fetchUrl)}/>
    )
};

