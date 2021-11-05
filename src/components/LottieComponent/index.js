import React from 'react';
import LottieView from 'lottie-react-native';
import assets from '../../assets/assets';

const gif = assets.gif2;

const LottieComponent = () => {
  return <LottieView source={gif} autoPlay loop />;
};

export default LottieComponent;
