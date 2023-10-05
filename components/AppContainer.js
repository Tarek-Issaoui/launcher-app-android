import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Home';


const AppNavigator = createStackNavigator({
    Home: { screen: Home }
  });
  
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;