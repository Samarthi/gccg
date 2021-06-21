import React from 'react';
import PropTypes from 'prop-types';

const CurrentScore = (props) => {
  const scoreStyle = {
    fontFamily:  '"Press Start 2P",regular',
    fontSize: 70,
    fill: '#ff7800',
  };

  return (
    <g >
      <text style={scoreStyle} x="900" y="-980">
        {props.score}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;
