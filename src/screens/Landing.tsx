import * as React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import { Button } from 'react-native-elements';

class NavigationTypes extends React.Component<any, any> {
    public pushScreen = () => {
        this.props.navigator.push({
            screen: 'Library',
            title: 'New Library Screen'
        });
    }

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

export default connect()(NavigationTypes);
