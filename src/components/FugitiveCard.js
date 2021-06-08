import React from 'react';
import "./cardContainer.css";
import { addATip } from '../actions/tipActions';
import { selectCase } from '../actions/singleCaseActions';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';

export default function FugitiveCard(props) {
  const dispatch = useDispatch();
  return (
    <div>
      <img src={props.case.image} height="200" width="200" alt="" />
      <h5>{props.case.title}</h5>
      <p>{props.case.description}</p>
      <Link to="./mostwanted/:id">
        <button onClick={() => selectCase(dispatch, props.case)}>View Details</button>
      </Link>
      <button onClick={() => addATip(dispatch, props.case)}>Add a Tip</button>
    </div>
  );
}
