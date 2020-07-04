import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  StatusBar,
  ImageBackground,
  UIManager,
  LayoutAnimation,
  Platform,
  Keyboard,
} from 'react-native';
const wid = Dimensions.get('window').width
const hie = Dimensions.get('window').height
const color1 = '#5f6ba7';
const platForm = Platform.OS === 'android';

if (platForm) { UIManager.setLayoutAnimationEnabledExperimental(true); } //animasyonları aktif et (sadece android de gerekli)

class UI1 extends React.Component {

  state = {
    page: '',
    klavye: false
  };

  signInOnPress = () => {
    this.setState({ page: 'signIn' })
    console.log('Sign In');
  }
  signUpPress = () => {
    this.setState({ page: 'signUp' })
  }

  signIn() {
    return (
      <View style={signInstyle.main}>
        <View>
          <Text style={signInstyle.fText}>Log In</Text>
          <Text style={signInstyle.sText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
        </View>

        <View>
          <View style={signInstyle.inputs}>
            <TextInput
              autoCompleteType={"email"}
              style={signInstyle.input}
            >
              E-mail
            </TextInput>
            <TextInput
              style={signInstyle.input}
              autoCompleteType={"password"}
            >
              Password
            </TextInput>
          </View>
          <View style={signInstyle.btn1}>
            <TouchableOpacity style={[style.btn, signInstyle.logInBtn]}>
              <Text style={style.btnTxt}>Log In</Text>
            </TouchableOpacity>
          </View>
          <Text style={signInstyle.andTxt}> if you do not have account please register now</Text>
          <View>
          <TouchableOpacity 
          onPress={this.signUpPress}
          style={[style.btn, signInstyle.register]}>
              <Text style={style.btnTxt}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }

  signUp() {
    return (
      <View style={signInstyle.main}>
        <View>
          <Text style={signInstyle.fText}>Register</Text>
          <Text style={signInstyle.sText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
        </View>

        <View>
          <View style={signInstyle.inputs}>
            <TextInput
              autoCompleteType={"email"}
              style={signInstyle.input}
            >
              E-mail
            </TextInput>
            <TextInput
              style={signInstyle.input}
              autoCompleteType={"password"}
            >
              Password
            </TextInput>
            <TextInput
              style={signInstyle.input}
              autoCompleteType={"password"}
            >
              rePassword
            </TextInput>
          </View>
          <View>
          <TouchableOpacity style={[style.btn, signInstyle.register]}>
              <Text style={style.btnTxt}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View >
    );
  }

  mainPage() {
    return (
      <View style={style.main}>
        <View style={style.mainTxt}>
          <Text style={style.fText}> Welcome </Text>
          <Text style={style.sText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>

        </View>
        <View>
          <TouchableOpacity onPress={this.signInOnPress} style={style.btn}>
            <Text style={style.btnTxt}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  render() {
    return (
      <ImageBackground

        style={style.imageSec}
        source={require('./images/ui2_b1.png')}
      >
        {this.state.page === '' && this.mainPage()}
        {this.state.page === 'signIn' && this.signIn()}
        {this.state.page==='signUp' && this.signUp()}
      </ImageBackground>
    );
  }
}

const style = StyleSheet.create({
  imageSec: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  main: {
    position: 'relative',
    top: '65%',
    left: '10%',

  },
  fText: {
    position: 'relative',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    left: 0

  },
  mainTxt: {
    width: wid * 0.80,
    textAlign: 'center',
    margin: 0,
    marginBottom: 90,

  },
  sText: {
    position: 'relative',
    marginLeft: 7
  },
  btn: {
    width: wid * 0.80,
    backgroundColor: color1,
    height: 40,
    borderRadius: 50
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#fff'
  },

});

const signInstyle = StyleSheet.create({
  main: {
    padding: 0,
    margin: 0,
    position: 'relative',
    top: '10%'
  },
  fText: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
    textAlign: 'center'
  },
  sText: {
    width: wid * 0.90,
    textAlign: 'center',
    margin: 0,
    padding: 10,
    paddingBottom: 0,
    marginLeft: 12
  },
  inputs: {
    width: wid * 0.90,
    padding: 10,
    justifyContent: 'center',
    marginLeft: 10
  },
  input: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 50,
    padding: 10,
    color: '#eaeaeb'
  },
  btn1: {
    width: wid * 0.80,
    textAlign: 'center'
  },
  logInBtn: {
    alignItems: 'center',
    marginLeft: 35
  },
  andTxt: {
    width: wid * 0.75,
    margin: 10,
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginLeft:40
  },
  register:{
    marginTop:20,
    alignItems: 'center',
    marginLeft: 35
  }
});

export default UI1;
