import React from "react";
import { Link } from "react-router-dom";
function Promo(props) {
  return (
    <div>
      <div className="Card-Promo">
        <h1>{props.title}</h1>
        <h2>{props.price} </h2>
        <p>{props.content1}</p>
        <p>{props.content2}</p>
        <p>{props.content3}</p>
        <Link to="/quote">
          <button style={{ cursor: "pointer" }}>GET PRO WEBSITE</button>
        </Link>
      </div>
    </div>
  );
}

export default Promo;
