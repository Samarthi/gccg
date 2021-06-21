import React from 'react';
import { pathFromBezierCurve } from '../utils/formulas';
import WebFont from 'webfontloader';

const Title = () => {
  const textStyle = {
    fontFamily: '"Press Start 2P",regular',
    fontSize: 45,
    fill: '#dd1a1a',
  };

  const aliensLineCurve = {
    initialAxis: {
      x: -190,
      y: -950,
    },
    initialControlPoint: {
      x: 95,
      y: -50,
    },
    endingControlPoint: {
      x: 285,
      y: -50,
    },
    endingAxis: {
      x: 380,
      y: 0,
    },
  };

  const goHomeLineCurve = {
    ...aliensLineCurve,
    initialAxis: {
      x: -250,
      y: -780,
    },
    initialControlPoint: {
      x: 125,
      y: -90,
    },
    endingControlPoint: {
      x: 375,
      y: -90,
    },
    endingAxis: {
      x: 500,
      y: 0,
    },
  };

  return (
    <g filter="url(#shadow)">
      <defs>
        <path
          id="AliensPath"
          d={pathFromBezierCurve(aliensLineCurve)}
        />
        <path
          id="GoHomePath"
          d={pathFromBezierCurve(goHomeLineCurve)}
        />
      </defs>
      <text {...textStyle}>
        <textPath xlinkHref="#AliensPath">
          Go Corona,
        </textPath>
      </text>
      <text {...textStyle}>
        <textPath xlinkHref="#GoHomePath">
          Corona Go!
        </textPath>
      </text>
    </g>
  );
};

export default Title;
