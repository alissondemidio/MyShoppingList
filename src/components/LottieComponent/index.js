import React from 'react';
import LottieView from 'lottie-react-native';

const LottieComponent = ({gif}) => {
  return <LottieView source={gif} autoPlay loop />;
};

export default LottieComponent;
