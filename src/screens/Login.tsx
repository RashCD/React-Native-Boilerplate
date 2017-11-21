import * as React from "react";
import { Text, View } from "react-native";
import {
    Button,
    Card,
    FormInput,
    FormLabel,
    FormValidationMessage,
} from "react-native-elements";

class Login extends React.Component {
    public render() {
        return (
            <Card title="Login">
                <FormLabel labelStyle={{ color: "black", fontWeight: "normal"}}>Email</FormLabel>
                <FormInput placeholder={"test@test.com"} inputStyle={{ color: "black" }}/>
                <FormValidationMessage>
                    Incorrect email
                </FormValidationMessage>

                <View style={{ height: 10 }}/>

                <FormLabel labelStyle={{ color: "black", fontWeight: "normal"}}>Password</FormLabel>
                <FormInput placeholder={"password"} inputStyle={{ color: "black" }}/>
                <FormValidationMessage>
                    Incorrect password
                </FormValidationMessage>

                <View style={{ height: 30 }}/>

                <Button
                    raised
                    icon={{ name: "send", color: "white" }}
                    backgroundColor={"dodgerblue"}
                    color={"white"}
                    title="LOGIN"
                    onPress={() => {}}
                />
            </Card>
        );
    }
}

export default Login;
