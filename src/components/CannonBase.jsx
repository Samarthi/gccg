import React from 'react';
//import { pathFromBezierCurve } from '../utils/formulas';
import mainLogo from './char.png';
import sLogo from './char2.png';
import tLogo from './fire.png';
import qLogo from './fire1.png';
const CannonBase = (props) => {
  

  return (
     <g>
      
    <svg x="-700" y="-220">
     <image href={sLogo} height="350" width="350"/>
    </svg>
    <svg x="400" y="-200">
      <image href={mainLogo} height="350" width="350"/>
    </svg>
    <svg x="850" y="-130">
    <image href={tLogo} height="350" width="350"/>
    </svg>
    <svg x="-1200" y="-130">
    <image href={qLogo} height="350" width="350"/>
    </svg>
    </g>
  );
};

export default CannonBase;
