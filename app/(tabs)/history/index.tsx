import React from 'react';

import { TransactionTable } from '~/modules/transaction/components/transactionTable/TransactionTable';
import { ExpandingView, Text } from '~/shared/components/atoms';

const HistoryPage = () => {
  return (
    <ExpandingView className="pt-20 px-10 dark:bg-gray-900">
      <Text className="text-lg">Transactions</Text>
      <TransactionTable
        className="mt-4"
        address="lsk6u3fwtbbcauvaupgdq5q9v6h4bvjp86sq7aesu"
      />
    </ExpandingView>
  );
};

export default HistoryPage;
