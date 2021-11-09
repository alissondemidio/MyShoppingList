import React from 'react';
import LottieView from 'lottie-react-native';

const LottieComponent = ({gif, loop}) => {
  return <LottieView source={gif} autoPlay loop={loop} />;
};

export default LottieComponent;
