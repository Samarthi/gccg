import React from 'react';
import PropTypes from 'prop-types';
import mainLogo from './covid.png';
const FlyingObjectBase = (props) => {
  

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     
      x={props.position.x} y={props.position.y}
      >     
  <image href={mainLogo}  height="150" width="150"   />
    </svg>
  );
};

FlyingObjectBase.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default FlyingObjectBase;
