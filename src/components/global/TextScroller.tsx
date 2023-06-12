import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import clsx from 'clsx';

const TextScroller = ({ text, styles }: { text: string; styles?: string }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: 'translate(60%,0)' },
    to: { transform: 'translate(-60%,0)' },
    config: { duration: 5000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div
        style={scrolling}
        className={clsx('whitespace-nowrap', styles)}
      >
        {text} {text} {text}
      </animated.div>
    </div>
  );
};

export default TextScroller;
