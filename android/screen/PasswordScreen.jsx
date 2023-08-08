import { StyleSheet, Text, Image, View, StatusBar, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import OTPTextInput from 'react-native-otp-textinput';
const PasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const gotoHomePage = () => {
    navigation.navigate("Homescreen")
  }
  const toggleForPassword = () => {
    setShowPassword((initialShowPassword) => !initialShowPassword)
  }
  const renderPassword = () => {
    if (showPassword) {
      return password;
    } else {
      return '•'.repeat(6);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor="#f1f1f1" barStyle="dark-content" />
      <View style={styles.mainView}>
        <Image
          style={styles.avatarImg}
          source={require("../app/src/images/mainLogo.png")}
        />
      </View>
      <View>
        <Text style={styles.maintxt}>Password</Text>
      </View>
      <View>
        <Text style={styles.subtxt}>You have enter you key </Text>
      </View>

      <View style={styles.inputView}>
        <OTPTextInput
          containerStyle={{
            width: "90%",
            height: 40,
          }}
          textInputStyle={{
            fontSize: 18
          }}
          secureTextEntry={!showPassword}
          onChangeText={setPassword}
          handleTextChange={(text) => {
            console.log('OTP input:', text);
          }}
          inputCount={6}
        />
        <TouchableOpacity onPress={toggleForPassword} style={styles.toggleButton}>
          <Text>{showPassword ?
            <Image
              style={styles.eyeImg}
              source={require("../app/src/images/hideLogo.png")}
            /> :
            <Image
              style={styles.eyeImg}
              source={require("../app/src/images/hideLogo.png")}
            />}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={gotoHomePage} style={styles.submitBtn}>
        <Text style={styles.Btntxt}>Submit</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}

export default PasswordScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20
  },
  mainView: {
    justifyContent: "center",
    elevation: 0,
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginVertical: 69
  },
  EditProfile: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 50,
    marginBottom: 44,
    width: Dimensions.get("screen").width / 3,
    marginLeft: 10
  },
  avatarImg: {
    width: 96,
    height: 79,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginTop: 22,
    marginBottom: 22
  },
  eyeImg: {
    width: 24,
    height: 27,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  maintxt: {
    fontWeight: "600",
    color: "#000",
    lineHeight: 36,
    fontSize: 24
  },
  subtxt: {
    fontWeight: "400",
    color: "#95A5A6",
    lineHeight: 24,
    fontSize: 16
  },
  Btntxt: {
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: 21,
    fontSize: 18,
    marginVertical: 14
  },
  submitBtn: {
    backgroundColor: "#066DE3",
    flexDirection: "row",
    borderRadius: 10,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: 60
  },
  input: {
    width: '20%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
  },
  inputView: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 30,
    // marginHorizontal: -20
  },
  toggleButton: {
    // paddingHorizontal: 15,
    borderRadius: 5,
    justifyContent: "center",
    borderWidth: 1,
    // marginLeft: 15

  },
  maskedPassword: {
    fontSize: 18,
  },

})