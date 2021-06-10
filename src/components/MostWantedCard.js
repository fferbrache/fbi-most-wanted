import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTip } from '../actions/tipActions';

export default function MostWantedCard({match}) {
  const Id = match.params.id;
  const dispatch = useDispatch();
  const mostWantedInfo = useSelector(state => state.mostWantedReducer);
  const mostWantedDisplay = mostWantedInfo.filter(mostWanted => (mostWanted.id === Id))
  return (
    <div className="individual-card">
      <img src={mostWantedDisplay[0].img} height="300" width="250" alt="Fugitive" />
      <h1>{mostWantedDisplay[0].title}</h1>
      <h3>Field Office: {mostWantedDisplay[0].field_office}</h3>
      <p>{mostWantedDisplay[0].description}</p>
      <form type="submit">
        <input 
        type="text"
        placeholder="Add tip"
        onChange={(e) => addTip(dispatch, e.target.value)}
        />
        <button className="tipButton" onClick={() => addTip(dispatch, mostWantedDisplay[0].tips)}>Add Tip</button>
      </form>
      <iframe width="560" height="315" src={mostWantedDisplay[0].video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}