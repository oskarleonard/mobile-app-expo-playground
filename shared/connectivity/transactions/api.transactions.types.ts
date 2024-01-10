import type { MetadataLists } from '~/shared/connectivity/api.common.types';

export interface TransactionsResponse {
  data: Transaction[];
  meta: MetadataLists;
}

export interface Transaction {
  executionStatus: string;
  id: string;
  nonce: string;
  sender: Sender;
}

export interface Sender {
  name: string;
  address: string;
  publicKey: string;
}
