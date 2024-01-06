import React, { useState } from 'react';
import { ScrollView, Text, TextInput, Image, View, StyleSheet, Pressable, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Dropdown } from 'react-native-element-dropdown';

import home from '../../assets/house.png';
import laptop from '../../assets/laptop.png';
import counselling from '../../assets/consulting.png';
import robot from '../../assets/robot-assistant.png';
import user from '../../assets/student.png';

function AppointmentScreen({ navigation }) {
    const [place, setPlace] = useState('');
    const [problem, setProblem] = useState('');
    const [valueSubject, setValueSubject] = useState(null);
    const [valueCounselling, setValueCounselling] = useState(null);
    const [valueConnect, setValueConnect] = useState(null);
    const [isFocusSubject, setIsFocusSubject] = useState(false);
    const [isFocusCounselling, setIsFocusCounselling] = useState(false);
    const [isFocusConnect, setIsFocusConnect] = useState(false);

    const subjectData = [
        { label: 'Carpenter', value: 'carpenter' },
        { label: 'Carparking', value: 'carparking' },
        { label: 'Teja', value: 'teja' },
        { label: 'Maroju', value: 'maroju' },
    ];

    const counsellingData = [
        { label: 'Counselor 1', value: 'counselor1' },
        { label: 'Counselor 2', value: 'counselor2' },
        { label: 'Counselor 3', value: 'counselor3' },
    ];

    const connectData = [
        { label: 'Morning', value: 'morning' },
        { label: 'Afternoon', value: 'afternoon' },
        { label: 'Evening', value: 'evening' },
    ];

    const images = [
        { id: 1, icon: home }, { id: 2, icon: laptop }, { id: 3, icon: counselling }, { id: 4, icon: robot }, { id: 5, icon: user }];

    return (
        <>
            <ScrollView>
                <LinearGradient colors={['#DFC6FD', '#70578E', '#3C3153']} style={styles.container}>
                    <View style={styles.logoContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <SimpleLineIcons name={'logout'} color={'#3A4A74'} size={22} />
                        </TouchableOpacity>
                        <View>
                            <Image source={require('../../assets/ananth.png')} style={styles.logo} />
                        </View>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <View style={styles.backBtnView}>
                                <Ionicons name={'chevron-back'} color={'#3A4A74'} size={20} />
                                <Text style={styles.backText}>Back</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.appAndEmeView}>
                        <Pressable>
                            <View style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Appointment</Text>
                            </View>
                        </Pressable>
                        <Pressable>
                            <View style={[styles.buttonContainer, { backgroundColor: '#fff', borderColor: '#7D09A3' }]}>
                                <Text style={[styles.buttonText, { color: '#7D09A3' }]}>Emergency</Text>
                            </View>
                        </Pressable>
                    </View>

                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.dropdownPlaceholder}
                        selectedTextStyle={styles.selectedTextStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        pickerStyle={styles.dropdownPickerStyle}
                        itemTextStyle={styles.dropdownItemText}
                        iconStyle={styles.iconStyle}
                        data={subjectData}
                        maxHeight={200}
                        labelField="label"
                        value={valueSubject}
                        valueField="value"
                        placeholder="Select a Subject"
                        onFocus={() => setIsFocusSubject(true)}
                        onBlur={() => setIsFocusSubject(false)}
                        onChange={(item) => {
                            setValueSubject(item.value);
                            setIsFocusSubject(false);
                        }}
                    />

                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.dropdownPlaceholder}
                        selectedTextStyle={styles.selectedTextStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        pickerStyle={styles.dropdownPickerStyle}
                        itemTextStyle={styles.dropdownItemText}
                        iconStyle={styles.iconStyle}
                        data={counsellingData}
                        maxHeight={200}
                        labelField="label"
                        value={valueCounselling}
                        valueField="value"
                        placeholder="Mode of Counselling"
                        onFocus={() => setIsFocusCounselling(true)}
                        onBlur={() => setIsFocusCounselling(false)}
                        onChange={(item) => {
                            setValueCounselling(item.value);
                            setIsFocusCounselling(false);
                        }}
                    />

                    <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.dropdownPlaceholder}
                        selectedTextStyle={styles.selectedTextStyle}
                        containerStyle={styles.dropdownContainerStyle}
                        pickerStyle={styles.dropdownPickerStyle}
                        itemTextStyle={styles.dropdownItemText}
                        iconStyle={styles.iconStyle}
                        data={connectData}
                        maxHeight={200}
                        labelField="label"
                        value={valueConnect}
                        valueField="value"
                        placeholder="Your Best Time to Connect"
                        onFocus={() => setIsFocusConnect(true)}
                        onBlur={() => setIsFocusConnect(false)}
                        onChange={(item) => {
                            setValueConnect(item.value);
                            setIsFocusConnect(false);
                        }}
                    />

                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Place"
                            placeholderTextColor="#E8CDEC"
                            value={place}
                            style={styles.textInput}
                            onChangeText={setPlace}
                        />
                    </View>

                    <View style={styles.passwordContainer}>
                        <TextInput
                            placeholder="Briefly tell us your problem... Type Here"
                            placeholderTextColor="#E8CDEC"
                            value={problem}
                            style={[styles.textInput, { height: 65 }]}
                            onChangeText={setProblem}
                        />
                    </View>

                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            onPress={() => Alert.alert('Successfully submitted')}
                            style={styles.signInButton}
                        >
                            <Text style={styles.signInButtonText}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ paddingBottom: 15 }}>
                        <View style={styles.bottomView}>
                            {images.map((item) => (
                                <>
                                    <View style={{ flexDirection: 'column', alignItems: 'center' }} key={item.id}>
                                        <Image source={item.icon} style={{ width: 30, height: 30 }} />
                                        {item.icon === counselling && <Text style={{ color: '#E8CDEC' }}>Counselling</Text>}
                                    </View>
                                </>
                            ))}
                        </View>
                    </View>
                </LinearGradient>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    logoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        resizeMode: 'cover',
        width: 120,
        height: 70
    },
    backBtnView: { flexDirection: 'row', alignItems: 'center' },
    buttonContainer: {
        backgroundColor: '#7D09A3',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderRadius: 15,
        borderColor: '#7D09A3'
    },
    appAndEmeView: { flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center', marginBottom: 30 },
    buttonText: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '700'
    },
    dropdown: {
        borderWidth: 1,
        borderColor: '#E8CDEC',
        borderRadius: 6,
        paddingRight: 6,
        paddingVertical: 22,
        backgroundColor: 'transparent',
        textTransform: 'capitalize',
        height: 40,
        color: '#E8CDEC',
        marginBottom: 20,
    },
    dropdownPlaceholder: {
        color: '#E8CDEC',
        paddingLeft: '3%',
        fontSize: 18,
        fontWeight: '700',
    },
    dropdownContainerStyle: {
        backgroundColor: '#3C3153',
    },
    dropdownPickerStyle: {
        backgroundColor: '#ccc',
    },
    dropdownItemText: {
        textTransform: 'capitalize',
        fontSize: 16,
        fontWeight: '600',
    },
    selectedTextStyle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#E8CDEC',
        paddingLeft: '3%',
        textTransform: 'capitalize',
        backgroundColor: 'transparent',
    },
    iconStyle: {
        width: 25,
        height: 25,
        tintColor: '#E8CDEC',
    },
    inputContainer: {},
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
        color: '#fff',
    },
    showHideButton: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    backText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#3A4A74'
    },
    buttonsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 30,
        marginBottom: 42,
    },
    bottomView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
});

export default AppointmentScreen;