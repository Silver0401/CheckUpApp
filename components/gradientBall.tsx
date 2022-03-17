import React from 'react';
import {
  Canvas,
  Fill,
  Oval,
  Group,
  Circle,
  Paint,
  LinearGradient,
  vec,
} from '@shopify/react-native-skia';

interface gradientBall {
  coordinates: [number, number];
  size: number;
  colors: [string, string];
}

const GradientBall: React.FC<gradientBall> = ({size, coordinates, colors}) => {
  const c = vec(size / 2, size / 2);

  return (
    <>
      <Paint>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(size * 3, size * 3)}
          colors={colors}
        />
      </Paint>
      <Oval x={coordinates[0]} y={coordinates[1]} width={size} height={size} />
    </>
  );
};

export default GradientBall;
