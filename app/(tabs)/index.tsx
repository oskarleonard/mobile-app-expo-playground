import { Redirect } from 'expo-router';

const DEFAULT_TAB = '/home/';
const Index = () => {
  return <Redirect href={DEFAULT_TAB} />;
};

export default Index;
