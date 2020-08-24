import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from '../pages/LandingPage';
import ToCamping from '../pages/ToCamping';
import CampingDetails from '../pages/CampingDetails';
import CampingRegister from '../pages/CampingRegister';

const { Navigator, Screen} = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="LandingPage" component={LandingPage} />
                <Screen name="ToCamping" component={ToCamping} />
                <Screen name="CampingDetails" component={CampingDetails} />
                <Screen name="CampingRegister" component={CampingRegister} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;