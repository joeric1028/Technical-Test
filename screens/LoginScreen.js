import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    KeyboardAvoidingView,
} from 'react-native';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isShowingEmailError: false,
            isShowingPasswordError: false,
            isDisabled: false,
            emailWarning: "not correct format for email address",
            passwordWarning: "please use at least 6 - 12 characters",
            emailEmpty: "email address is empty",
            passwordEmpty: "password is empty",
            emailErrorTemp: '',
            passwordErrorTemp: ''
        };
    }

    handleChange(emailOrPassword, value) {
        if (emailOrPassword == true) {
            this.setState({
                isShowingEmailError: false,
                emailErrorTemp: "",
                email: value,
                isDisabled: false
            });
            
        } else {
            this.setState({
                isShowingPasswordError: false,
                passwordErrorTemp: "",
                password: value,
                isDisabled: false
            });
        }
    }

    handleLogin = () => {
        var validator = require("email-validator");
        var passwordValidator = require('password-validator');
        var schema = new passwordValidator();
        schema.is().min(6);
        schema.is().max(12);
        if (this.state.email == '') {
            this.setState({
                isShowingEmailError: true,
                emailErrorTemp: this.state.emailEmpty,
                isDisabled: true
            });
            if (this.state.password == '') {
                this.setState({
                    isShowingpasswordError: true,
                    passwordErrorTemp: this.state.passwordEmpty,
                    isDisabled: true
                });
            } else if (!schema.validate(this.state.password)) {
                this.setState({
                    isShowingPasswordError: true,
                    passwordErrorTemp: this.state.passwordWarning,
                    isDisabled: true
                });
            }
        } else if (this.state.password == '') {
            this.setState({
                isShowingpasswordError: true,
                passwordErrorTemp: this.state.passwordEmpty,
                isDisabled: true
            });
            if (!validator.validate(this.state.email)) {
                this.setState({
                    isShowingEmailError: true,
                    emailErrorTemp: this.state.emailWarning,
                    isDisabled: true
                });
            } 
        } else if (!validator.validate(this.state.email)) {
            this.setState({
                isShowingEmailError: true,
                emailErrorTemp: this.state.emailWarning,
                isDisabled: true
            });
            if (!schema.validate(this.state.password)) {
                this.setState({
                    isShowingPasswordError: true,
                    passwordErrorTemp: this.state.passwordWarning,
                    isDisabled: true
                });
            }
        } else if (!schema.validate(this.state.password)) {
            this.setState({
                isShowingPasswordError: true,
                passwordErrorTemp: this.state.passwordWarning,
                isDisabled: true
            });
        } else if (!this.state.isShowingEmailError && !this.state.isShowingPasswordError) {
            alert("Login Successfully");
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.welcomeContainer}>
                        <Image
                            source={require('../assets/images/logo.png')}
                            style={styles.welcomeImage}/>
                        </View>
                    <View style={styles.formContainer}>
                        <Text style={styles.formLabelFont}>
                            Email
                        </Text>
                        <TextInput
                            onChangeText={value => this.handleChange(true, value)}
                            value={this.state.email}
                            style={styles.formInputField}
                            placeholder='Input email address'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            accessibilityLabel='Input email address'
                            textContentType='emailAddress' />
                        <Text style={styles.formError}>
                            {this.state.emailErrorTemp}
                        </Text>
                        <Text style={styles.formLabelFont}>
                            Password
                        </Text>
                        <TextInput
                            onChangeText={value => this.handleChange(false, value)}
                            value={this.state.password}
                            style={styles.formInputField}
                            placeholder='Input password'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                            textContentType='password'
                            accessibilityLabel='Input password'
                            secureTextEntry={true} />
                        <Text style={styles.formError}>
                            {this.state.passwordErrorTemp}
                        </Text>
                    </View>
                    <View style={styles.formButtonContainer}>
                        <View style={styles.formButton}>
                                <Button
                                    onPress={this.handleLogin}
                                    disabled={this.state.isDisabled}
                                    accessibilityLabel='Sign In'
                                    title="Sign In"
                                    color='white'/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    contentContainer: {
        paddingTop: 30
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    welcomeImage: {
        width: 230,
        height: 210,
        resizeMode: 'contain',
        marginTop: 5,
        marginLeft: 0
    },
    formContainer: {
        paddingTop: 20,
        padding: 20
    },
    formLabelFont: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 5 
    },
    formInputField: {
        padding: 10,
        fontSize: 17,
        borderRadius: 5,
        borderWidth: 1.5,
        borderColor: '#714db2'
    },
    formButton: {
        padding: 5,
        backgroundColor: '#714db2',
        borderRadius: 5
    },
    formButtonContainer: {
        paddingTop: 5,
        padding: 20
    },
    formError: {
        color: 'red',
        padding: 5
    }
  });