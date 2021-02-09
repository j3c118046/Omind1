import React, {Component} from 'react';
import {DrawerLayoutAndroid, Image, Text, TextInput, View, StyleSheet, Button} from 'react-native';


export default class HomeScreen extends Component{
    render(){
        return(
          <View style={{flex:1, backgroundColor: '#7c9473',}} >
            <View style={{marginTop:10}}>
              <Button style={styles.buttonStyle} title="Login" onPress={()=>this.props.navigation.navigate('Login')}/>
            </View>
            <View>
              <Button title="Registrasi" onPress={()=>this.props.navigation.navigate('Registrasi')}/>
            </View>
          </View>
        );
        } 
}

const styles = StyleSheet.create({
    text:{
      fontSize: 18,
      fontWeight: 'bold',
      color: '#1687a7',
      marginTop: 20,
      marginLeft: 0,
      borderWidth: 1,
      borderColor: '#121013',
    },
    buttonStyle:{
      width: '80%',
      marginTop: 20,
      borderRadius: 20
    },
  });

// export default App;

