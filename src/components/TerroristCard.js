import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTip } from '../actions/tipActions';

export default function TerroristCard({match}) {
  const Id = match.params.id;
  const dispatch = useDispatch();
  const terroristInfo = useSelector(state => state.terrorismReducer);
  const terroristDisplay = terroristInfo.filter(terrorist => (terrorist.id === Id))
  return (
    <div className="individual-card">
      <img src={terroristDisplay[0].img} height="300" width="250" alt="Terrorist" />
      <h1>{terroristDisplay[0].title}</h1>
      <h3>Field Office: {terroristDisplay[0].field_office}</h3>
      <p>{terroristDisplay[0].description}</p>
      <form type="submit">
        <input 
        type="text"
        placeholder="Add tip"
        onChange={(e) => addTip(dispatch, e.target.value)}
        />
        <button className="tipButton" onClick={() => addTip(dispatch, terroristDisplay[0].tips)}>Add Tip</button>
      </form>
    </div>
  );
}