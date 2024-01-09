import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export function usePersistedColorScheme() {
  const { setColorScheme, colorScheme } = useExtendedStore();

  useEffect(() => {
    setColorScheme(colorScheme);
  }, []);
}

export function useExtendedStore() {
  const colorScheme = useStore((state) => state.colorScheme);
  const toggleColorScheme = useStore((state) => state.toggleColorScheme);
  const { setColorScheme } = useColorScheme();

  function toggleAndPersistColorScheme() {
    toggleColorScheme();
  }

  useEffect(() => {
    setColorScheme(colorScheme);
  }, [colorScheme, setColorScheme]);

  return { toggleAndPersistColorScheme, colorScheme, setColorScheme };
}

type State = {
  colorScheme: 'dark' | 'light';
  isDiscreteMode: boolean;
};

type Actions = {
  toggleColorScheme: () => void;
  toggleDiscreteMode: () => void;
};

export const useStore = create(
  persist<State & Actions>(
    (set) => ({
      colorScheme: 'light',
      isDiscreteMode: false,
      toggleColorScheme: () => {
        set((state) => ({
          colorScheme: state.colorScheme === 'light' ? 'dark' : 'light',
        }));
      },
      toggleDiscreteMode: () => {
        set((state) => ({
          isDiscreteMode: !state.isDiscreteMode,
        }));
      },
    }),
    {
      name: 'persisted', // unique name
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
