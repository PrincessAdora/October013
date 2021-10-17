import React from "react";
import meat from "./images/meat.jpg";
import "./css/slice.css";

function MeatLover() {
  return (
    <div className="MeatLover col-4">
      <div className="card">
        <img src={meat} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Meat Slice</h5>
          <p className="card-text">It has beef and extra cheese for 5 bucks!</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $5.00</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatLover;
