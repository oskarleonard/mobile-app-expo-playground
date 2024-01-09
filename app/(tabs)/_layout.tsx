import { Tabs } from 'expo-router';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: 'Home',
          title: 'Home',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="history/index"
        options={{
          headerTitle: 'History',
          title: 'History',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          headerTitle: 'Settings',
          title: 'Settings',
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
