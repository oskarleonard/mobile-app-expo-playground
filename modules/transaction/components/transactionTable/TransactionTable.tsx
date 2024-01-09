import React from 'react';

import { ExpandingView } from '~/components/atoms/expandingView/ExpandingView';
import { List } from '~/components/atoms/list/List';
import { TransactionRow } from '~/modules/transaction/components/transactionTable/transactionRow/TransactionRow';
import { useTransactions } from '~/modules/transaction/queries/useTransactions';

const TransactionTable = ({ className, address, limit }: TransactionProps) => {
  const { transactions } = useTransactions({
    networkParams: { address, limit },
  });

  return (
    <ExpandingView className={className}>
      <List
        data={transactions}
        estimatedItemSize={10}
        renderItem={(data) => {
          return <TransactionRow transaction={data.item} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </ExpandingView>
  );
};

interface TransactionProps {
  className?: string;
  address?: string;
  limit?: number;
}

export { TransactionTable };
