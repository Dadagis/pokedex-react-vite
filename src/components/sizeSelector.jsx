import React from 'react';
import PropTypes from 'prop-types';

function sizeSelector({ handleClick }) {
  return (
    <div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick(false)}
        >
          <rect width="24" height="24" rx="2" fill="#D9D9D9" />
          <rect
            x="3.36002"
            y="2.88"
            width="7.2"
            height="7.2"
            rx="1"
            fill="#3D3D3D"
          />
          <rect
            x="3.36002"
            y="13.44"
            width="7.2"
            height="7.2"
            rx="1"
            fill="#3D3D3D"
          />
          <rect
            x="13.92"
            y="2.88"
            width="7.2"
            height="7.2"
            rx="1"
            fill="#3D3D3D"
          />
          <rect
            x="13.92"
            y="13.44"
            width="7.2"
            height="7.2"
            rx="1"
            fill="#3D3D3D"
          />
        </svg>
      </div>
      <div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => handleClick(true)}
        >
          <rect width="24" height="24" rx="2" fill="#D9D9D9" />
          <rect x="2" y="8" width="20" height="7.2" rx="1" fill="#3D3D3D" />
        </svg>
      </div>
    </div>
  );
}

sizeSelector.propTypes = {};

export default sizeSelector;
