import { useEffect, useState } from 'react'
import axios from 'axios';
const APIKEY= process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`;

const useGif = (tag) => {
    const [gifLink, setGifLink]= useState("");
    const [loading, setLoading]= useState(false);
    async function getGif(tag){
      setLoading(true);
      const {data}= await axios.get(tag? `${url}&tag=${tag}`: url);
      console.log(tag);
      setGifLink(data?.data?.images?.downsized_large.url);
      setLoading(false);
    }
    useEffect(()=>{
      getGif(tag);
    }, []);

    return {gifLink, loading, getGif};
}

export default useGif
