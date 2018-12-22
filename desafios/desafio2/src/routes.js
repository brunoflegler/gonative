import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/main';
import Issues from '~/pages/issues';

const Routes = createAppContainer(
  createSwitchNavigator({
    Main,
    Issues,
  }),
);

export default Routes;
