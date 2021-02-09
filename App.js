import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/page/Login';
import HomeScreen from './src/page/Home';
import RegistrasiScreen from './src/page/Registrasi';

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}
  const AppNavigator = createStackNavigator({
    Home:{
      screen: HomeScreen
    },
    Login:{
      screen: LoginScreen
    },
    Registrasi:{
      screen: RegistrasiScreen
    },
  });

  const AppContainer = createAppContainer(AppNavigator);