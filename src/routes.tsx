import { Navigation } from 'react-native-navigation';

import Home from './screens/Home';
import Landing from './screens/Landing';

export function registerScreens() {
    Navigation.registerComponent('Landing', () => Landing);
    Navigation.registerComponent('Home', () => Home);
}
