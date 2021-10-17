import React from "react";
import veggie from "./images/veggie.jpeg";
import "./css/slice.css";

function Veggie() {
  return (
    <div className="Veggie col-4">
      <div className="card">
        <img src={veggie} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Veggie Slice</h5>
          <p className="card-text">
            Cheese slice with a vegeterian twist. Wow, so healthy! Get one now
            :D
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $4.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Veggie;
