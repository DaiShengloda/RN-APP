import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native';
import Dimensions from 'Dimensions';

class LoginView extends Component {
  _pressLoginBtn(){
    Alert.alert(
      '用户登录',
      '确定登录该系统吗？',
      [
        {text: '取消', onPress: () => console.log('点击取消按钮')},
        {text: '确认', onPress: () => console.log('点击确认按钮')},
      ],
      { cancelable: false }
    )
  }

  render(){
    return(
      <View style={styles.container}>
        {/* 头像 */}
        <Image style={styles.circleImage} source={require('../images/logo.png')}/>
        {/* 账户 */}
        <TextInput
          style={styles.textInput}
          placeholder={'请输入用户名'}
          underlinecolorAndroid={'transparent'}/>
        {/*密码*/}
        <TextInput
          style={styles.textInput}
          placeholder={'请输入密码'}
          secureTextEntry={true}
          underlineColorAndroid={'transparent'}/>
        {/* 登录*/}
        <TouchableOpacity 
          style={styles.btnStyle}
          onPress={this._pressLoginBtn}>
          <Text style={styles.loginText}>登录</Text>
        </TouchableOpacity>
        {/* 无法登陆 新用户 */}
        <View style={styles.canNot}>
          <Text style={{color:'#4398ff'}}>无法登陆</Text>
          <Text style={{color:'#4398ff'}}>新用户</Text>
        </View>
        {/* 其他登录方式 */}
        <View style={styles.loginTheWay}>
          <Text>其他登录方式：</Text>
          <Image style={styles.image} source={require('../images/alipay.png')}/>
          <Image style={styles.image} source={require('../images/wechat.png')}/>
        </View>
      </View>
    )
  }
}

// 获取屏幕的宽度
var {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#dddddd',
    alignItems: 'center'
  },
  circleImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 100,
    marginBottom: 25,
  },
  textInput: {
    height: 40,
    width: width,
    marginBottom: 5,
    backgroundColor: 'white',
    textAlign: 'center'
  },
  canNot: {
    width: width-32,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  loginTheWay: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'absolute',
    bottom: 30,
    left: 10
  },
  image: {
    width: 50,
    height:50,
    marginLeft:5,
    borderRadius:23,
  },
  btnStyle: {
    height: 40,
    width: width-32,
    borderRadius:5,
    marginTop:20,
    backgroundColor: "#4398ff",
    justifyContent: 'center'
  },
  loginText: {
    textAlign: 'center',
    color: 'white',
    textAlignVertical: 'center'
  }
});

export default LoginView;