import type { AxiosRequestConfig } from 'axios';

import { API_V3, getBaseRequestConfig } from '~/connectivity/baseRequestConfig';
import httpRequest from '~/connectivity/httpRequest';
import type { TransactionsResponse } from '~/connectivity/transactions/api.transactions.types';

export interface TransactionsParams {
  transactionID?: string;
  address?: string;
  sort?: string;
  limit?: number;
}

export function fetchTransactions({
  address,
  transactionID,
  sort,
  limit,
}: TransactionsParams = {}): Promise<TransactionsResponse> {
  // return mockGetRequest(200, { posValidators: MOCK_POS_VALIDATORS });
  const url = new URL(`${API_V3}/transactions`);
  sort && url.searchParams.append('sort', sort);
  limit && url.searchParams.append('limit', limit.toString());
  address && url.searchParams.append('address', address);
  transactionID && url.searchParams.append('transactionID', transactionID);

  const baseRequestConfig = getBaseRequestConfig();
  const requestConfig: AxiosRequestConfig = {
    ...baseRequestConfig,
    url: url.toString(),
    method: 'GET',
  };
  console.log('requestConfig', requestConfig);

  return httpRequest(requestConfig);
}
