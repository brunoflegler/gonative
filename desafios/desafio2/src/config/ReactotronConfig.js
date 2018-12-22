import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure({
  host: '192.168.0.101',
  // host: '192.168.114.2',
})
  .useReactNative()
  .connect();

console.tron = tron;
tron.clear();
