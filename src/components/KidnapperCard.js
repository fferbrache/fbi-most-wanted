import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTip } from '../actions/tipActions';

export default function KidnapperCard({match}) {
  const Id = match.params.id;
  const dispatch = useDispatch();
  const missingPersonInfo = useSelector(state => state.kidnapperReducer);
  const missingPersonDisplay = missingPersonInfo.filter(missingPerson => (missingPerson.id === Id))
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="individual-card">
      <div className="individual-details">
      <img src={missingPersonDisplay[0].img} height="300" width="250" alt="Terrorist" />
      <h1>{missingPersonDisplay[0].title}</h1>
      <h3>Field Office: {missingPersonDisplay[0].field_office}</h3>
      <p>{missingPersonDisplay[0].description}</p>
      <form type="submit" onSubmit={(e) => {
        e.preventDefault()
        return addTip(dispatch, inputValue)}
        }>
        <input 
        type="text"
        placeholder="Enter text"
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="tipButton" onClick={() => addTip(dispatch, missingPersonDisplay[0].tips)}>Submit A Tip</button>
      </form>
        </div>
        <img src={missingPersonDisplay[0].file} height="600" width="500" alt="Fugitive Poster" />
    </div>
  );
}