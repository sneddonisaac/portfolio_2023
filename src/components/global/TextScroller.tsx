import React from 'react';
import clsx from 'clsx';

const TextScroller = ({
  text,
  styles,
}: {
  text: string;
  styles?: React.ComponentProps<'div'>['className'];
}) => {
  return (
    <div className={clsx('text-scroller', styles)}>
      <p className={'1'}>
        {text} {text} {text}
      </p>
      <p className={'2'}>
        {text} {text} {text}
      </p>
    </div>
  );
};

export default TextScroller;
