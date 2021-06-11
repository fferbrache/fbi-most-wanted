import React from 'react';
import {useSelector} from 'react-redux';
import fbiLogo from '../assets/img/fbiLogo.jpeg'

export default function Tips() {
  const mostWantedTips = useSelector((state) => state.tipReducer);
  return (
    <div className="tip-container">
      <h1>Tips</h1>
      {mostWantedTips.map(tips => (
        <div className="tip-detail">
          {tips}
        </div>
      ))}
      <img src={fbiLogo} alt="fbi-logo" height="300" width="250"/>
    </div>
  )
}

