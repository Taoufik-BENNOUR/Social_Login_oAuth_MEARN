import React from "react";
import {Link} from "react-router-dom";
const Card = ({ movie }) => {
  return (
    <div className="card">
      <span className="title">{movie.title}</span>
      <img src={movie.img} className="img" alt="movie"/>
      <div className="card-body">
      <p className="desc">{movie.description}</p>
      <Link  to={`/post/${movie.id}`}><button className="cardButton">Read More</button></Link>

    </div>

    </div>
  );
};

export default Card;
