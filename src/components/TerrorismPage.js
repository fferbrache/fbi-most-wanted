import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function TerrorismPage() {
  const displayTerrorists = useSelector((state) => state.terrorismReducer);

  return (
    <div className="main-container">
      {displayTerrorists.map(terrorist => 
        <div className="card-container">
          <img src={terrorist.img} alt="terrorist-img" height="300" width="250"/>
            <div className="card-details">
              <h3>{terrorist.title}</h3>
              <h5>Field Office: {terrorist.field_office}</h5>
              <Link className="details-link" to={`/terrorismlist/${terrorist.id}`}>View Details</Link>
            </div>
          </div>
      )}
    </div>
  )
}