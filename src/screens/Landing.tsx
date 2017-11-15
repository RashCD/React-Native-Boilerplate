import * as React from 'react';
import { View, Text } from 'react-native';

import { Button } from 'react-native-elements';

class NavigationTypes extends React.Component<any, any> {
    pushScreen = () => {
        this.props.navigator.push({
            screen: 'Home',
            title: 'New Screen'
        });
    };

    public render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Button
                    raised
                    containerViewStyle={{ borderRadius: 10 }}
                    icon={{ name: 'home', size: 32 }}
                    buttonStyle={{ backgroundColor: 'red', borderRadius: 10 }}
                    textStyle={{ textAlign: 'center' }}
                    title={`Welcome to\nReact Native`}
                    onPress={this.pushScreen}
                />
            </View>
        );
    }
}

export default NavigationTypes;
