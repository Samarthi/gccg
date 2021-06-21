import React from 'react';
import PropTypes from 'prop-types';
//import { pathFromBezierCurve } from '../utils/formulas';
import mainLogo from './heart.png';
const Heart = (props) => {
  return (
    <g filter="url(#shadow)">
       <svg xmlns="http://www.w3.org/2000/svg" x={props.position.x-800} y={props.position.y-1200}  >     
        <image href={mainLogo}  height="300" width="80" />
       </svg>
      
    </g>
  );
};

Heart.propTypes = {
  position: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired,
};

export default Heart;
