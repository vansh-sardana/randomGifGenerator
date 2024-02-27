import React, { useState } from 'react'
import Loading from './Loading';
import useGif from '../hooks/useGif';

const Tag = () => {
  const [tag, setTag]= useState("tree");
  const {gifLink, loading, getGif}= useGif(tag);
    function generateHandler(){
        getGif(tag);
    }

  return (
    <div className='w-1/2 bg-blue-400 flex flex-col items-center justify-evenly gap-4 py-6 rounded-xl border drop-shadow-sm'>
      <h2 className='text-2xl underline uppercase font-bold'>Random {tag} GIF</h2>
      {loading?<Loading/>:<img src={gifLink} alt="" className='max-h-[450px]'/>}
      <input type="text" value={tag} onChange={
        (e)=>{
          setTag(e.target.value)
        }
      } className='rounded-lg text-center px-5 py-2 w-9/12'/>
      <button onClick={generateHandler} className='bg-blue-100 w-9/12 py-2 rounded-md'>
        Generate
      </button>
    </div>
  )
}

export default Tag

