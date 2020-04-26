import { createBottomTabNavigator } from 'react-navigation-tabs';

import { HomePage, InfoPage, SchedulePage } from '@pages';

const BottomTabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomePage
    },
    Info: {
        screen: InfoPage
    },
    Schedule: {
        screen: SchedulePage
    }
}, {
    initialRouteName: 'Home'
});

export default BottomTabNavigator;