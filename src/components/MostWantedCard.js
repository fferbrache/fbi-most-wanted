import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTip } from '../actions/tipActions';
import mostWantedReducer from '../reducers/mostWantedReducer';

export default function MostWantedCard({match}) {
  const Id = match.params.id;
  const dispatch = useDispatch();
  const mostWantedInfo = useSelector(state => state.mostWantedReducer);
  const mostWantedDisplay = mostWantedInfo.filter(mostWanted => (mostWanted.id === Id))
  const [inputValue, setInputValue] = useState("");
  console.log(mostWantedInfo)
  console.log(mostWantedDisplay)
  console.log(mostWantedDisplay)
  return (
    <div className="individual-card">
      <img src={mostWantedDisplay[0].img} height="300" width="250" alt="Fugitive" />
      <h1>{mostWantedDisplay[0].title}</h1>
      <h3>Field Office: {mostWantedDisplay[0].field_office}</h3>
      <p>{mostWantedDisplay[0].description}</p>
      <form type="submit" onSubmit={(e) => {
        e.preventDefault()
        console.log(inputValue)
        return addTip(dispatch, inputValue)}
      }>
        <input 
        type="text"
        placeholder="Add tip"
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="tipButton">Add Tip</button>
      </form>
      <iframe width="560" height="315" src={mostWantedDisplay[0].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}