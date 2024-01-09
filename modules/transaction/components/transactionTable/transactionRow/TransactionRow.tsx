import { Link } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { Text } from '~/components/atoms';
import type { Transaction } from '~/connectivity/transactions/api.transactions.types';
import { useStore } from '~/state/store';

const TransactionRow = ({ transaction }: { transaction: Transaction }) => {
  const isDiscreteMode = useStore((state) => state.isDiscreteMode);

  return (
    <Link
      className="mt-1 flex flex-row rounded-lg bg-white dark:bg-black p-4"
      asChild
      key={transaction.id}
      href={`/home/transactions/${transaction.id}`}
    >
      <Pressable>
        <Text>{transaction.sender?.name}</Text>
        <Text className="ml-10">
          {isDiscreteMode ? '...' : transaction.nonce}
        </Text>
        <Text className="ml-16">{transaction.executionStatus}</Text>
      </Pressable>
    </Link>
  );
};

export { TransactionRow };
