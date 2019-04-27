import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';

export default createAppContainer(createSwitchNavigator({
  Login: LoginScreen,
}));