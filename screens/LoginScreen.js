import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    KeyboardAvoidingView 
} from 'react-native';

export default class LoginScreen extends Component {
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
                            style={styles.formInputField}
                            placeholder='Input email address'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            textContentType='emailAddress' />
                        <Text style={styles.formError}>
                        </Text>
                        <Text style={styles.formLabelFont}>
                            Password
                        </Text>
                        <TextInput
                            style={styles.formInputField}
                            placeholder='Input password'
                            placeholderTextColor='gray'
                            autoCapitalize='none'
                            textContentType='password'
                            secureTextEntry={true} />
                        <Text style={styles.formError}>
                        </Text>
                    </View>
                    <View style={styles.formButtonContainer}>
                        <View style={styles.formButton}>
                            <Button
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
        padding: 5
    }
  });