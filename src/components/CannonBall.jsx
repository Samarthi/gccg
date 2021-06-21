import React from 'react';
import PropTypes from 'prop-types';
//import 'central-vista.jpg'
import mainLogo from './central-vista1-new.png';

const CannonBall = (props) => {
return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
     
      x={props.position.x} y={props.position.y}
      >     
  <image href={mainLogo}  height="250" width="250"   />
    </svg>
  )
}

CannonBall.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default CannonBall;
