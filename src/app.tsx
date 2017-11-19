import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { registerScreens } from './routes';

import reducers from './reducers/index';
import configureStore from './store/ConfigureStore';

const store = configureStore();

registerScreens(store, Provider);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Landing',
        title: 'Welcome'
    }
});
