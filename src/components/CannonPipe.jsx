import React from 'react';
import PropTypes from 'prop-types';
//import  from '../utils/formulas';
import mainLogo from './rafae1l.png';
const CannonPipe = (props) => {
  
  const transform = `rotate(${props.rotation}, 125,10)`;
        
    return (
    <g transform={transform}>      
      <svg xmlns="http://www.w3.org/2000/svg" x="-50" y="-190"  >     
        <image href={mainLogo}  height="350" width="350"   />
      </svg>
    </g>
  );
};

CannonPipe.propTypes = {
  rotation: PropTypes.number.isRequired,
};

export default CannonPipe;
