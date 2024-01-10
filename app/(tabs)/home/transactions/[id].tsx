import { Stack, useGlobalSearchParams } from 'expo-router';
import { SafeAreaView, Text, View } from 'react-native';

import { useTransactions } from '~/modules/transaction/queries/useTransactions';

export default function Transactions() {
  const { id } = useGlobalSearchParams<{ id: string }>();
  const { transactions } = useTransactions({
    networkParams: { transactionID: id },
  });
  const transaction = transactions?.[0];

  if (!transaction) return null;

  return (
    <SafeAreaView className="bg-[#1F104A]">
      <Stack.Screen
        options={{ title: transaction.nonce + transaction.sender.name }}
      />
      <View className="h-full w-full p-4">
        <Text className="py-2 text-3xl font-bold text-white">
          {transaction.executionStatus}
        </Text>
      </View>
    </SafeAreaView>
  );
}
