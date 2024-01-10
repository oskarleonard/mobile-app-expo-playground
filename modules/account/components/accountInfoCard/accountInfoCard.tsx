import React from 'react';

import { ExpandingView, Text } from '~/shared/components/atoms';

const AccountInfoCard = () => {
  return (
    <ExpandingView className="flex flex-row rounded-lg bg-white dark:bg-red-900 p-4">
      <Text>Name: Oskar</Text>
      <Text>Balance: 1m$</Text>
    </ExpandingView>
  );
};

export { AccountInfoCard };
