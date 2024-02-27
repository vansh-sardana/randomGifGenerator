import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from './Loading';
import useGif from '../hooks/useGif';
const APIKEY= process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const {gifLink, loading, getGif}= useGif();
  function generateHandler(){
      getGif();
  }

  return (
    <div className='w-1/2 bg-green-400 flex flex-col items-center justify-evenly gap-4 py-6 rounded-xl border drop-shadow-sm'>
      <h2 className='text-2xl underline uppercase font-bold'>Random GIF</h2>
      {loading?<Loading/>:<img src={gifLink} alt="" className='max-h-[450px]'/>}
      <button onClick={generateHandler} className='bg-green-100 w-9/12 py-2 rounded-md'>
        Generate
      </button>
    </div>
  )
}

export default Random
