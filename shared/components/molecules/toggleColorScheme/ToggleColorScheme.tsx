import React from 'react';

import { SwitchButton } from '~/shared/components/atoms';
import { useExtendedStore } from '~/shared/state/store';

function ToggleColorScheme({ className }: { className?: string }) {
  const { toggleAndPersistColorScheme, colorScheme } = useExtendedStore();

  function toggle() {
    toggleAndPersistColorScheme();
  }

  return (
    <SwitchButton
      className={className}
      onValueChange={toggle}
      isEnabled={colorScheme === 'dark'}
    />
  );
}

export { ToggleColorScheme };
