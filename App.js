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

const wid = Dimensions.get('window').width;
const hie = Dimensions.get('window').height;

const platForm = Platform.OS === 'android';

if (platForm) { UIManager.setLayoutAnimationEnabledExperimental(true); } //animasyonları aktif et (sadece android de gerekli)

class UI2 extends React.Component {

  componentDidUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  state = {
    page: '',
    klavye: false,
  };

  signInOnPress = () => {
    this.setState({ page: 'signIn' })
  }

  signUpPress = () => {
    this.setState({ page: 'signUp' })
  }

  signUp() {
    return (
      <View style={signInstyle.main}>
        <View>
          <Text style={style.logo}>BlogWorx</Text>
          <View style={style.line} />
          <Text style={style.expo}>Express yor self</Text>
        </View>
        <View style={signInstyle.registerBox}>
          <Text style={signInstyle.signUpTxt}>Sig Up</Text>
          <View style={style.line} />
        </View>

        <View style={signInstyle.mainReg}>
          <View style={signInstyle.inputs}>
            <TextInput
              autoCompleteType={"email"}
              style={signInstyle.inputRegister}
            >
              E-mail
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

  signIn() {
    return (
      <View style={signInstyle.main}>
        <View>
          <Text style={style.logo}>BlogWorx</Text>
          <View style={style.line} />
          <Text style={style.expo}>Express yor self</Text>
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
            <Text style={signInstyle.forget}>Forget Password</Text>
          </View>
          <View style={signInstyle.btn1}>
            <TouchableOpacity style={[style.btn, signInstyle.logInBtn]}>
              <Text style={style.btnTxt}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={signInstyle.orTxtBox}>
            <Text style={signInstyle.orTxt}>OR</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={this.signUpPress}
              style={signInstyle.register}>
              <Text style={style.btnTxt}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  mainPage() {
    return (
      <View style={style.main}>
        <View style={style.txt}>
          <Text style={style.logo}>BlogWorx</Text>
          <View style={style.line} />
          <Text style={style.expo}>Express yor self</Text>
        </View>
        <View style={style.bottom}>
          <View style={style.btnContainer}>
            <TouchableOpacity onPress={this.signInOnPress} style={style.btn}>
              <Text style={style.btnTxt}>Get Start</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ImageBackground
        style={style.imageSec}
        source={require('./images/ui3_b1.png')}
      >
        {this.state.page === 'signUp' && this.signUp()}
        {this.state.page === 'signIn' && this.signIn()}
        {this.state.page === '' && this.mainPage()}
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
    width: wid,
    height: hie
  },
  txt: {
    height: hie * 0.50,
    width: '100%',
    position: 'absolute',
    top: '20%',

  },
  logo: {
    textAlign: 'center',
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20
  },
  line: {
    width: wid * 0.15,
    backgroundColor: '#fff',
    height: hie * 0.005,
    left: '45%',
    marginBottom: 20,
    marginTop: 5
  },
  expo: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',

  },
  bottom: {
    width: wid * 0.80,
    position: 'relative',
    top: '80%'
  },
  btnContainer: {
    alignItems: 'center',
  },
  btn: {
    textAlign: 'center',
    backgroundColor: '#826bdf',
    width: '100%',
    height: hie * 0.08,
    justifyContent: 'center',
    left: '14%'
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: 20,
    color: '#fff'
  }
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
    width: wid * 0.9,
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
    marginLeft: 20
  },
  input: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    color: '#826bdf',
    borderWidth: 1,
    borderColor: '#826bdf'
  },
  btn1: {
    width: wid * 0.80,
    textAlign: 'center'
  },
  logInBtn: {
    alignItems: 'center',
    left:'10%'
  },
  andTxt: {
    width: wid * 0.75,
    margin: 10,
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginLeft: 40
  },
  register: {
    textAlign: 'center',
    backgroundColor: '#826bdf',
    width: wid * 0.82,
    height: hie * 0.08,
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
    left: '8 %'
  },
  forget: {
    fontSize: 16,
    color: '#826bdf',
    margin: 20,
    left: '55%'
  },
  orTxtBox: {
    width: wid * 0.08,
    height: wid * 0.08,
    borderWidth: 1,
    borderRadius: wid * 0.08 / 2,
    left:'45%',
    marginTop:15
  },
  orTxt: {
    marginTop:5,
    textAlign: 'center',
  },
  mainReg: {
    top: '20%'
  },
  registerBox: {
    marginTop: 20,
    margin: 10
  },
  signUpTxt: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    paddingBottom: 20,
    marginBottom: 10,
    marginTop: 20,
    left: '2%'

  },
  inputRegister: {
    backgroundColor: '#826bdf',
    padding: 10,
    color: '#eaeaeb'
  },

});

export default UI2;
