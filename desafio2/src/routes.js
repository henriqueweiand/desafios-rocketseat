
import { StackNavigator } from 'react-navigation';

import Lista from 'pages/lista';
import Issues from 'pages/issues';

const Routes = StackNavigator({
  Lista: { screen: Lista },
  Issues: { screen: Issues },
}, {
  initialRouteName: 'Lista',
});

export default Routes;
