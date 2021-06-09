import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import { addATip } from '../actions/tipActions';

export default function TerrorismPage() {
  const displayAllTerrorists = useSelector((state) => state.terrorismReducer);
  const dispatch = useDispatch();

  return (
    <div className="allTerrorists">
      {displayAllTerrorists.map(cases => 
        <div className="cardContainer">
          <img src={cases.img} alt="terrorist-img" height="300" width="250"/>
          <div className="card-bottom">
            <div className="card-details">
              <h3>{cases.title}</h3>
              <h5>Field Office: {cases.field_office}</h5>
              <p>{cases.description}</p>
            </div>
            <div className="add-tip">
              <Link to={`/terrorismlist/${cases.id}`}>View Details</Link>
              <button className="tipButton" onClick={() => addATip(dispatch, cases)}>Submit Tip</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}