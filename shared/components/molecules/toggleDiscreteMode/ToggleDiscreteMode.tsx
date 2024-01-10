import React from 'react';

import { SwitchButton } from '~/shared/components/atoms';
import { useStore } from '~/shared/state/store';

function ToggleDiscreteMode({ className }: { className?: string }) {
  const toggleDiscreteMode = useStore((state) => state.toggleDiscreteMode);
  const isDiscreteMode = useStore((state) => state.isDiscreteMode);

  return (
    <SwitchButton
      className={className}
      onValueChange={toggleDiscreteMode}
      isEnabled={isDiscreteMode}
    />
  );
}

export { ToggleDiscreteMode };
