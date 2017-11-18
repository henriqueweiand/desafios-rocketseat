import React from 'react';
import { StackNavigator } from 'react-navigation';

import Header from 'components/header';
import Lista from 'pages/lista';
import Issues from 'pages/issues';

const Routes = StackNavigator({
  Lista: { screen: Lista },
  Issues: { screen: Issues },
}, {
  initialRouteName: 'Lista',
  navigationOptions: {
    header: props => <Header {...props} />,
  },
});

export default Routes;
