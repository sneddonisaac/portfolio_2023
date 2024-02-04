import React from 'react';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';

const TextScroller = ({
  text,
  styles,
}: {
  text: string;
  styles?: React.ComponentProps<'div'>['className'];
}) => {
  return (
    <Marquee className={clsx(styles)}>
      {text}
    </Marquee>
  );
};

export default TextScroller;
