import classNames from 'classnames';
import React from 'react';
import { Text as NativeText } from 'react-native';

const Text = ({ className, children }: TextProps) => {
  return (
    <NativeText className={classNames('text-black dark:text-white', className)}>
      {children}
    </NativeText>
  );
};

interface TextProps {
  className?: string;
  children?: React.ReactNode;
}

export { Text };
