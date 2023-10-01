import React from 'react';
import './style.css'

function Outfit({ display }) {
  return (
    <div>
      {display.top && (
        <div>
          <img src={display.top.imageUrl} alt={display.top.description} />
          <p>{display.top.description}</p>
        </div>
      )}

      {display.bottom && (
        <div>
          <img src={display.bottom.imageUrl} alt={display.bottom.description} />
          <p>{display.bottom.description}</p>
        </div>
      )}

      {display.shoes && (
        <div>
          <img src={display.shoes.imageUrl} alt={display.shoes.description} />
          <p>{display.shoes.description}</p>
        </div>
      )}
    </div>
  );
}

export default Outfit;
