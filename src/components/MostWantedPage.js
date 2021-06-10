import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function MostWantedPage() {
  const displayMostWanted = useSelector((state) => state.mostWantedReducer);

  return (
    <div className="main-container">
      {displayMostWanted.map(mostWanted => 
        <div className="card-container">
          <img src={mostWanted.img} alt="most-wanted-img" height="300" width="250"/>
            <div className="card-details">
              <h3>{mostWanted.title}</h3>
              <h5>Field Office: {mostWanted.field_office}</h5>
              <Link className="details-link"to={`/mostwantedlist/${mostWanted.id}`}>View Details</Link>
            </div>
        </div>
      )}
    </div>
  )
}


