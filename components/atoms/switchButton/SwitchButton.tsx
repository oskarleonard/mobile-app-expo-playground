import classNames from 'classnames';
import React from 'react';
import { View, Switch as NativeSwitch, SwitchProps } from 'react-native';

const SwitchButton = ({
  className,
  onValueChange,
  isEnabled,
}: SwitchButtonProps) => {
  return (
    <View className={classNames('flex items-center justify-center', className)}>
      <NativeSwitch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onValueChange}
        value={isEnabled}
      />
    </View>
  );
};

interface SwitchButtonProps {
  className?: string;
  isEnabled?: boolean;
  onValueChange?: ((value: boolean) => Promise<void> | void) | null | undefined;
}

export { SwitchButton };
