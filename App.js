import * as React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image as ExpoImage } from 'expo-image';
import { StyleSheet } from 'react-native';
import {
  Color,
  Border,
  Padding,
  FontFamily,
  FontSize,
} from './GlobalStyles';

import { useNavigate } from 'react-router-dom';

import {MainScreen} from './screens/MainScreen';
import {WalkingRouteScreen} from './screens/WalkingRoute';
import {TrophiesScreen} from './screens/InviteFriends';
import {ProfileScreen} from './screens/Profile';


// import WalkingRouteScreen from 'WalkingRoute.js';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }



// function ProfileScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// }

// function TrophiesScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Trophies Screen</Text>
//     </View>
//   );
// }

// function WalkingRouteScreen() {
//   navigation.navigate('WalkingRoute');
// }

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = require('./assets/materialsymbolshomeoutline.png');
          } else if (route.name === 'WalkingRoute') {
            iconName = require('./assets/fasolidwalking1.png');
          } else if (route.name === 'Profile') {
            iconName = require('./assets/iconamoonprofilefill.png');
          } else if (route.name === 'Trophies') {
            iconName = require('./assets/trophy.png');
          }

          return <Image source={iconName} style={{ tintColor: color, width: size, height: size }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e91e63',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={MainScreen} />
      <Tab.Screen name="WalkingRoute" component={WalkingRouteScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Trophies" component={TrophiesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
