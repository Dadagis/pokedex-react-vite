import React from 'react';
import PropTypes from 'prop-types';
import '../styles/m-sizeSelector/m-sizeSelector.css';

function sizeSelector({ handleClick }) {
  const toggleSelected = ({ target }) => {
    if (target.classList.contains('--selected')) return;

    const parent = target.parentElement;
    parent.classList.toggle('--large');
    parent.querySelectorAll('.m-sizeSelector__option').forEach((element) => {
      element.classList.toggle('--selected');
    });
  };

  return (
    <div className="m-sizeSelector">
      <svg
        width="19"
        height="19"
        viewBox="0 0 19 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={(event) => {
          handleClick(false);
          toggleSelected(event);
        }}
        className="m-sizeSelector__option --selected"
      >
        <rect
          x="0.360016"
          y="0.880005"
          width="7.2"
          height="7.2"
          rx="1"
          fill="#3D3D3D"
        />
        <rect
          x="0.360016"
          y="11.44"
          width="7.2"
          height="7.2"
          rx="1"
          fill="#3D3D3D"
        />
        <rect
          x="10.92"
          y="0.880005"
          width="7.2"
          height="7.2"
          rx="1"
          fill="#3D3D3D"
        />
        <rect
          x="10.92"
          y="11.44"
          width="7.2"
          height="7.2"
          rx="1"
          fill="#3D3D3D"
        />
      </svg>

      <svg
        width="20"
        height="15"
        viewBox="0 0 20 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={(event) => {
          handleClick(true);
          toggleSelected(event);
        }}
        className="m-sizeSelector__option"
      >
        <rect width="20" height="15" rx="1" fill="#3D3D3D" />
      </svg>
    </div>
  );
}

sizeSelector.propTypes = {};

export default sizeSelector;
