import React from 'react';
import {useSelector} from 'react-redux';

export default function Tips() {
  const mostWantedTips = useSelector((state) => state.tipReducer);
  // const terrorismTips = useSelector((state) => state.terrorismReducer);
  // const kidnappingTips = useSelector((state) => state.kidnapperReducer);

  return (
    <div className="tips">
      <h1>Tips</h1>
      {mostWantedTips.map(tips => (
        <div className="cardContainer">
          {tips}
          {/* <img src={cases.img} alt="tip-img" height="50" width="50" /> */}
        </div>
      ))}
      {/* <h3>Terrorism</h3>
      {terrorismTips.map(cases => (
        <div className="cardContainer">
          <img src={cases.img} alt="tip-img" height="50" width="50" />
        </div>
      ))}
      <h3>Kidnappings/Missing Persons</h3>
      {kidnappingTips.map(cases => (
        <div className="cardContainer">
          <img src={cases.img} alt="tip-img" height="50" width="50" />
        </div>
      ))} */}

    </div>
  )
}

