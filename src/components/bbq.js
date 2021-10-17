import React from "react";
import bbq from "./images/bbq.jpg";
import "./css/slice.css";

function Bbq() {
  return (
    <div className="Bbq col-4">
      <div className="card">
        <img src={bbq} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bbq Slice</h5>
          <p className="card-text">
            Cheese pizza with delicious, hand-picked chicken with creamy BBQ
            sauce.
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $3.50</li>
        </ul>
      </div>
    </div>
  );
}

export default Bbq;
