import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/styles';

interface ICircleProps {
  rotate?: number;
  delay?: number;
}

const useCirclePrimitive = makeStyles((theme: ICircleProps) => {
  let circlePrimitiveStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    top: '0',
  };
  if(theme.rotate) {
    Object.assign(circlePrimitiveStyle, {
      'transform': `rotate(${theme.rotate}deg)`,
    });
  }
  let circlePrimBeforeStyle = {
    content: '',
    display: 'block',
    margin: '0 auto',
    width: '15%',
    height: '15%',
    backgroundColor: '#999',
    borderRadius: '100%',
    '@keyframes circleFadeDelay': {
      '0%,39%,100%': {
        opacity: 0,
      },
      '40%': {
        opacity: 1,
      },
    },
    animation: `$circleFadeDelay 1.2s infinite ease-in-out both`,
  };
  if(theme.delay) {
    Object.assign(circlePrimBeforeStyle, {
      animationDelay: `${theme.delay}s`,
    });
  }
  // Object.assign(circlePrimitiveStyle, {
  //   '&:before': circlePrimBeforeStyle,
  // });
  return {
    root: circlePrimitiveStyle,
  };
});

const Circle = (props: ICircleProps) => {
  const classes = useCirclePrimitive(props);
  return <div className={classes.root} />;
};

export default Circle;
