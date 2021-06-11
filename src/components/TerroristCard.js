import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTip } from '../actions/tipActions';

export default function TerroristCard({match}) {
  const Id = match.params.id;
  const dispatch = useDispatch();
  const terroristInfo = useSelector(state => state.terrorismReducer);
  const terroristDisplay = terroristInfo.filter(terrorist => (terrorist.id === Id))
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="individual-card">
      <div className="individual-details">
      <img src={terroristDisplay[0].img} height="300" width="250" alt="Terrorist" />
      <h1>{terroristDisplay[0].title}</h1>
      <h3>Field Office: {terroristDisplay[0].field_office}</h3>
      <p>{terroristDisplay[0].description}</p>
      <form type="submit" onSubmit={(e) => {
        e.preventDefault()
        return addTip(dispatch, inputValue)
      }}>
        <input 
        type="text"
        placeholder="Enter text"
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="tipButton">Submit A Tip</button>
      </form>
        </div>
        <img src={terroristDisplay[0].file} height="600" width="500" alt="Terrorist" />
    </div>
  );
}