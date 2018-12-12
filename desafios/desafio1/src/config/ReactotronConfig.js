import Reactotron from 'reactotron-react-native';

const tron = Reactotron.configure({
  host: '172.30.3.174',
  // host: '192.168.0.111',
})
  .useReactNative()
  .connect();

console.tron = tron;
tron.clear();
