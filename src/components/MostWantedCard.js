import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTip } from '../actions/tipActions';

export default function MostWantedCard({match}) {
  const Id = match.params.id;
  const dispatch = useDispatch();
  const mostWantedInfo = useSelector(state => state.mostWantedReducer);
  const mostWantedDisplay = mostWantedInfo.filter(mostWanted => (mostWanted.id === Id))
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="individual-card">
      <div className="individual-details">
      <img src={mostWantedDisplay[0].img} height="300" width="250" alt="Fugitive" />
      <h1>{mostWantedDisplay[0].title}</h1>
      <h3>Field Office: {mostWantedDisplay[0].field_office}</h3>
      <p>{mostWantedDisplay[0].description}</p>
      <form type="submit" onSubmit={(e) => {
        e.preventDefault()
        return addTip(dispatch, inputValue)}
      }>
        <input 
        type="text"
        placeholder="Enter text"
        onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="tipButton">Submit A Tip</button>
      </form>
      </div>
      <img src={mostWantedDisplay[0].file} height="600" width="500" alt="Fugitive Poster" />
      <iframe width="560" height="315" src={mostWantedDisplay[0].video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}