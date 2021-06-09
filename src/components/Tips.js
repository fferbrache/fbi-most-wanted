import React from 'react';
import {useSelector} from 'react-redux';

export default function Tips() {
  const cases = useSelector(state => state.caseReducer)

  return (
    <div className="tips">
      <h1>Tips</h1>
      {cases.map(cases => (
        <div className="cardContainer">
          <img src={cases.img} alt="tip-img" height="300" width="250" />
          <h3>{cases.title}</h3>
        </div>
      ))}
    </div>
  )
}

