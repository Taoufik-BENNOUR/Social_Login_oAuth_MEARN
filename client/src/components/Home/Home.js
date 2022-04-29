import React from 'react'
import {data} from "../../data";
import Card from './Card';

const Home = () => {
  return (
    <div className='home'>
        {data.map((movie,i)=><Card movie={movie} key={i} />)}
    </div>
  )
}

export default Home