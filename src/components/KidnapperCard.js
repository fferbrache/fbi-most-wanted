import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTip } from '../actions/tipActions';

export default function KidnapperCard({match}) {
  const Id = match.params.id;
  const dispatch = useDispatch();
  const missingPersonInfo = useSelector(state => state.kidnapperReducer);
  const missingPersonDisplay = missingPersonInfo.filter(missingPerson => (missingPerson.id === Id))
  return (
    <div className="individual-card">
      <img src={missingPersonDisplay[0].img} height="300" width="250" alt="Terrorist" />
      <h1>{missingPersonDisplay[0].title}</h1>
      <h3>Field Office: {missingPersonDisplay[0].field_office}</h3>
      <p>{missingPersonDisplay[0].description}</p>
      <form type="submit">
        <input 
        type="text"
        placeholder="Add tip"
        onChange={(e) => addTip(dispatch, e.target.value)}
        />
        <button className="tipButton" onClick={() => addTip(dispatch, missingPersonDisplay[0].tips)}>Add Tip</button>
      </form>
    </div>
  );
}