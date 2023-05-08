import React from 'react';
import { StatusBar } from 'react-native';
import { Provider, useSelector } from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { MainLayout } from './src/client/layout/mainLayout';

import { Home } from './src/client/pages/home/Home';
import { Groups } from './src/client/pages/groups/Groups';
import { Group } from './src/client/pages/groups/Group';
import { CreateGroup } from './src/client/pages/groups/CreateGroup';
import { Users } from './src/client/pages/users/Users';
import { Registration } from './src/client/pages/auth/Registration';
import {Auth} from './src/client/pages/auth/Auth';
import { store } from './src/client/src/reducers';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store}>

      <Navigator />
      <StatusBar backgroundColor='#354052' />

    </Provider>
  );
}

const Navigator = () => {

  const isAuth = useSelector(state => state.users.isAuth)

  return (
    <NavigationContainer>
      <MainLayout>

        <Stack.Navigator screenOptions={{headerShown: false}}>

          { !isAuth && <Stack.Screen name="Auth" component={Auth} /> }
          { !isAuth && <Stack.Screen name="Registration" component={Registration} /> }

          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Groups" component={Groups} />
          <Stack.Screen name="Group" component={Group} />
          <Stack.Screen name="CreateGroup" component={CreateGroup} />
          <Stack.Screen name="Users" component={Users} />

        </Stack.Navigator>

      </MainLayout>
    </NavigationContainer>
  )
}
