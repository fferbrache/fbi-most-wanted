import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addATip } from '../actions/tipActions';

export default function FugitiveCard({match}) {
  console.log({match})
  const Id = match.params.id;
  const dispatch = useDispatch();
  const caseInfo = useSelector(state => state.terrorismReducer);
  const caseDisplay = caseInfo.filter(cases => (cases.id === Id))
  return (
    <div className="individual-card">
      <h1 className="individual-title">{caseDisplay[0].title}</h1>
      <div className="caseContainer">
        <div className="inividual-image">
          <img src={caseDisplay[0].img} height="300" width="250" alt="Terrorist" />
        <div className="individual-office">
          <h3>Field Office: {caseDisplay[0].field_office}</h3>
          <button className="individual-button" onClick={() => addATip(dispatch, caseDisplay[0])}>Add a Tip</button>
        </div>
        </div>
        <div className="individual-details">
          <p>{caseDisplay[0].description}</p>
        </div> 
      </div>
    </div>
  );
}