import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

export default function KidnapperPage() {
  const displayAllKidnappers = useSelector((state) => state.kidnapperReducer);

  return (
    <div className="main-container">
      {displayAllKidnappers.map(missingPerson => 
        <div className="card-container">
          <img src={missingPerson.img} alt="terrorist-img" height="300" width="250"/>
            <div className="card-details">
              <h3>{missingPerson.title}</h3>
              <h5>Field Office: {missingPerson.field_office}</h5>
              <Link className="details-link" to={`/missingpersonslist/${missingPerson.id}`}>View Details</Link>
            </div>
          </div>
      )}
    </div>
  )
}