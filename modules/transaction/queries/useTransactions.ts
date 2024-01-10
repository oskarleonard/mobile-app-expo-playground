import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { TransactionsParams } from '~/shared/connectivity/transactions/api.transactions';
import { fetchTransactions } from '~/shared/connectivity/transactions/api.transactions';

export const QUERY_KEY_TRANSACTIONS = 'QUERY_KEY_TRANSACTIONS';

export function useTransactions({
  networkParams,
  shouldKeepPreviousData = true,
}: {
  networkParams?: TransactionsParams;
  shouldKeepPreviousData?: boolean;
}) {
  const query = useQuery({
    queryKey: [QUERY_KEY_TRANSACTIONS, networkParams],
    queryFn: () => fetchTransactions(networkParams),
    placeholderData: shouldKeepPreviousData ? keepPreviousData : undefined,
  });

  return {
    transactions: query?.data?.data ?? [],
    meta: query?.data?.meta,
    isLoading: query.isLoading,
  };
}
