import React from 'react';
import PropTypes from 'prop-types';
import { gameWidth } from '../utils/constants';
import s from './gccg.mp3';
import ReactAudioPlayer from 'react-audio-player';

const StartGame = (props) => {
  const button = {
    x: gameWidth / -2, // half width
    y: -280, // minus means up (above 0)
    width: gameWidth,
    height: 200,
    rx: 10, // border radius
    ry: 10, // border radius
    style: {
      fill: 'transparent',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };

  const text = {
    textAnchor: 'middle', // center
    x: 0, // center relative to X axis
    y: -150, // 150 up
    style: {
      fontFamily: '"Cabin Sketch", cursive',
      fontSize: 60,
      fill: '#ff7800',
      cursor: 'pointer',
    },
    onClick: props.onClick,
  };
  return (
    <g filter="url(#shadow)">
      <rect {...button} />
      <text {...text}>
        Tap To Start!
      </text>
      <ReactAudioPlayer
  src={s}
  autoPlay
  loop
/>
    </g>
  );
};

StartGame.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default StartGame;
