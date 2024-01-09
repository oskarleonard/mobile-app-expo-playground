import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import './global.css';

import { usePersistedColorScheme } from '~/state/store';

const RootLayout = () => {
  const [queryClient] = useState(() => new QueryClient());

  usePersistedColorScheme();

  return (
    <QueryClientProvider client={queryClient}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar />
    </QueryClientProvider>
  );
};

export default RootLayout;
