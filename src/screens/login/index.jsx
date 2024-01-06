import React, { useState } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import logo from '../../assets/ananth.png';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from 'react-native-vector-icons/Ionicons';

function LoginScreen({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const signInHandler = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailRegex.test(email) && password.length >= 6) {
            navigation.navigate("Appointment")
        } else {
            Alert.alert(" Please enter valid data.")
        }
    }

    return (
        <>
            <LinearGradient
                colors={['#DFC6FD', '#70578E', '#3C3153']}
                style={styles.container}
            >
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#E8CDEC"
                        value={email}
                        style={styles.textInput}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#E8CDEC"
                        value={password}
                        style={styles.textInput}
                        secureTextEntry={!showPassword}
                        onChangeText={setPassword}
                        maxLength={10}
                    />
                    <TouchableOpacity style={styles.showHideButton} onPress={toggleShowPassword}>
                        <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color={showPassword ? '#fff' : "#E8CDEC"} />
                    </TouchableOpacity>
                </View>

                <View style={styles.rememberMeContainer}>
                    <TouchableOpacity
                        style={styles.rememberMeTouchable}
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        <Text style={[styles.rememberMeText, { color: rememberMe ? '#fff' : '#E8CDEC' }]}>
                            Remember me?
                        </Text>
                        <MaterialCommunityIcons name={rememberMe ? "checkbox-marked-outline" : "checkbox-blank-outline"} color={rememberMe ? '#fff' : '#E8CDEC'} size={25} />
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonsContainer}>
                    <TouchableOpacity
                        style={styles.forgotPasswordTouchable}
                        onPress={() => console.log('forgot clicked')}
                    >
                        <Text style={styles.forgotPasswordText}>
                            Forgot password?
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => signInHandler()}
                        style={styles.signInButton}
                    >
                        <Text style={styles.signInButtonText}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.googleLoginContainer}>
                    <TouchableOpacity
                        onPress={() => console.log('login clicked')}
                        style={styles.googleLoginTouchable}
                    >
                        <AntDesign name={"google"} color={'#3C3153'} size={20} />
                        <Text style={styles.googleLoginText}>
                            Login with Gmail
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.signUpContainer}>
                    <TouchableOpacity onPress={() => console.log('sign up clicked')}>
                        <Text style={styles.signUpText}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.anonymousSignUpContainer}>
                    <TouchableOpacity onPress={() => console.log('Anonymouse clicked')}>
                        <Text style={styles.anonymousSignUpText}>
                            Anonymous Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 40
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 60,
    },
    logo: {},
    inputContainer: {},
    passwordContainer: {
        marginBottom: 10,
        position: 'relative',
        marginBottom: 20
    },
    textInput: {
        backgroundColor: 'transparent',
        marginBottom: 10,
        borderColor: '#E8CDEC',
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 20,
        color: '#fff'
    },
    showHideButton: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    rememberMeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 80,
    },
    rememberMeTouchable: {
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rememberMeText: {
        fontSize: 20,
        fontWeight: '600',
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        marginBottom: 20,
    },
    forgotPasswordTouchable: {},
    forgotPasswordText: {
        color: '#E8CDEC',
        fontSize: 18,
        fontWeight: '600',
    },
    signInButton: {
        backgroundColor: '#FBD9D8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        elevation: 4,
    },
    signInButtonText: {
        color: '#3C3153',
        fontSize: 20,
        fontWeight: '600',
    },
    googleLoginContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginBottom: 60,
    },
    googleLoginTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#FBD9D8',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
        elevation: 2,
    },
    googleLoginText: {
        color: '#3C3153',
        fontSize: 18,
        fontWeight: '600',
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    signUpText: {
        color: '#E8CDEC',
        fontSize: 20,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
    anonymousSignUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    anonymousSignUpText: {
        color: '#E8CDEC',
        fontSize: 20,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});

export default LoginScreen;