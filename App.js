import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createStackNavigator();

// //Components
import Home from './screens/Home';
import Content from './screens/Content';
import Write from './screens/Write';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
              title: 'Notepad'
            }}
          />
          <Stack.Screen 
            name="Content" 
            component={Content}
          />
          <Stack.Screen 
            name="Write" 
            component={Write} 
            options={{
              title: 'Note'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
