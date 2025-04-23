import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from'./src/screens/Home';
import EditTask from './src/screens/EditTask';

const RootSack = createNativeStackNavigator({
    initalRouteName: 'Home',
    screenOpitions: {
    headerShown: false  
    }, 
    screens: {
     Home: Home,
     EditTask:EditTask,
    },
});

const Navigation = createStaticNavigation(ReactootStack);
export default function App() {
    return <Navigation />;
  }