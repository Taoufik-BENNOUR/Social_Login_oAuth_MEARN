import React from 'react'
import { useLocation } from 'react-router-dom'
import {data} from "../../data";
const PostDetail = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  console.log(location)
  const movie = data.find(el=>el.id.toString() ===path)
  return (
    <div className='post'>
        <img  className='postImg' src={movie.poster} alt="movie poster"/>
        <h1 className='postTitle'>{movie.title}</h1>
        <p className='postDesc'>{movie.description}</p>
        <iframe width="560" height="315" src={movie.trailer} title="movie trailer" />
    </div>
  )
}

export default PostDetail