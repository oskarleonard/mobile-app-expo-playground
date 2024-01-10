import React from 'react';

import { AccountInfoCard } from '~/modules/account/components/accountInfoCard/accountInfoCard';
import { useInvalidateAccessToken } from '~/modules/account/hooks/useInvalidateAccessToken/useInvalidateAccessToken';
import { TransactionTable } from '~/modules/transaction/components/transactionTable/TransactionTable';
import { ExpandingView, Text } from '~/shared/components/atoms';
import { ToggleColorScheme } from '~/shared/components/molecules';

// Purpose of a Page:
// Purpose is to have an ID to a route.
// Purpose is to group domains together.
// Purpose use domain options to fit the screen.

const HomePage = () => {
  useInvalidateAccessToken();

  return (
    <ExpandingView className="pt-20 px-10 dark:bg-gray-900">
      <Text className="text-2xl font-bold">Home SCREEN</Text>
      <ToggleColorScheme />
      <ExpandingView className="flex flex-col">
        <ExpandingView className="border-4 p-2 mt-16">
          <AccountInfoCard />
        </ExpandingView>
        <ExpandingView className="mt-16 border-4 p-2">
          <Text className="text-lg font-bold">Transacrions</Text>
          <TransactionTable
            className="mt-4"
            address="lsk6u3fwtbbcauvaupgdq5q9v6h4bvjp86sq7aesu"
            limit={4}
          />
        </ExpandingView>
      </ExpandingView>
    </ExpandingView>
  );
};

export default HomePage;
