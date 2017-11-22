
import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";

declare const firebase: any;

class NavigationTypes extends React.Component<any, any> {

    public pushScreen = () => {
        this.props.navigator.push({
            screen: "Login",
            title: "Login"
        });
    }

    public render() {
        return (
            <View style={{ marginTop: 10 }}>
                <Button
                    raised
                    containerViewStyle={{ borderRadius: 10 }}
                    icon={{ name: "home", size: 32 }}
                    buttonStyle={{ backgroundColor: "red", borderRadius: 10 }}
                    textStyle={{ textAlign: "center" }}
                    title={`Welcome to\nReact Native`}
                    onPress={this.pushScreen}
                />
            </View>
        );
    }
}

export default connect()(NavigationTypes);
