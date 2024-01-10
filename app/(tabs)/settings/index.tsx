import React from 'react';
import { View } from 'react-native';

import { TransactionTable } from '~/modules/transaction/components/transactionTable/TransactionTable';
import { ExpandingView, SwitchButton, Text } from '~/shared/components/atoms';
import { useExtendedStore, useStore } from '~/shared/state/store';

const SettingPage = () => {
  return (
    <ExpandingView className="pt-20 dark:bg-gray-900">
      <View className="px-10">
        <Text className="text-2xl md:text-6xl">SettingPage</Text>
        <View className="mt-10 flex flex-row justify-between items-center">
          <Text>Dark mode</Text>
          <ToggleColorScheme />
        </View>
        <View className="mt-10 flex flex-row justify-between items-center">
          <Text>Discrete mode</Text>
          <ToggleDiscreteMode />
        </View>
      </View>
      <View className="mt-16 h-1 bg-black" />
      <ExpandingView className="px-10">
        <Text className="mt-16">Example Table</Text>
        <TransactionTable
          className="mt-4"
          address="lsk6u3fwtbbcauvaupgdq5q9v6h4bvjp86sq7aesu"
          limit={4}
        />
      </ExpandingView>
    </ExpandingView>
  );
};

export default SettingPage;

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
