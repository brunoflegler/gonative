import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({
    host: '192.168.0.110',
    // host: '192.168.0.106',
  })
    .useReactNative()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  console.tron = tron;
  tron.clear();
}
