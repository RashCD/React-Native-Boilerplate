import * as React from "react";
import { Text, View } from "react-native";
import {
    Button,
    Card,
    FormInput,
    FormLabel,
    FormValidationMessage,
} from "react-native-elements";
import { connect } from "react-redux";

import { emailChange, passwordChange, request } from "../actions/index";

let emailInput: any = null;
let showError: boolean = false;

let passwordInput: any = null;

class Login extends React.Component<any, any> {
    public render() {
        console.log(this.props);
        return (
            <Card title="Login">
                <FormLabel labelStyle={{ color: "black", fontWeight: "normal"}}>Email</FormLabel>
                <FormInput
                    ref={(ref) => { emailInput = ref; }}
                    placeholder={"test@test.com"}
                    inputStyle={{ color: "black" }}
                    onChangeText={this.emailChange}
                    value={this.props.email}
                />

                <View style={{ height: 10 }}/>

                <FormLabel labelStyle={{ color: "black", fontWeight: "normal"}}>Password</FormLabel>
                <FormInput
                    ref={(ref) => { passwordInput = ref; }}
                    placeholder={"password"}
                    inputStyle={{ color: "black" }}
                    secureTextEntry={true}
                    onChangeText={this.passwordChange}
                    value={this.props.password}
                />
                {showError ?
                    <FormValidationMessage>Complete all the field</FormValidationMessage> :
                    null
                }

                <View style={{ height: 30 }}/>

                <Button
                    raised
                    icon={{ name: "send", color: "white" }}
                    backgroundColor={"dodgerblue"}
                    color={"white"}
                    title="LOGIN"
                    onPress={() => this.submitButton()}
                />
            </Card>
        );
    }
    protected emailChange = (text: string) => {
        this.props.emailChange(text);
    }

    protected passwordChange = (text: string) => {
        this.props.passwordChange(text);
    }

    protected submitButton = () => {
        const { email, password } = this.props;
        if (email === "" || password === "") {
            showError = true;
            emailInput.shake();
            passwordInput.shake();
            this.forceUpdate();
            return null;
        }

        this.props.request({email, password});

    }

}

const mapStateToProps = (state: any) => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };
};

export default connect(mapStateToProps, {
    emailChange, passwordChange, request
})(Login);
