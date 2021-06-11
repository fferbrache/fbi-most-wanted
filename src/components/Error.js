import React from 'react';
import fbiLogo from '../assets/img/fbiLogo.jpeg'

export default function Error() {
  return (
    <div className="error-template">
      <h1>404 Not Found</h1>
      <p>  Sorry, an error has occurred, Requested page not found!</p>
      <div className="error-details">
      <img src={fbiLogo} alt="fbi-logo" height="600" width="500"/>
      </div>
    </div>
  )
}
