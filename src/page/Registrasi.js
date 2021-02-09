import React, {Component} from 'react';
import {DrawerLayoutAndroid, Image, Text, TextInput, View, StyleSheet, Alert} from 'react-native';
import BgImage from '../page/images/background.jpg';
import Logo from '../page/images/logobr.png';
import { 
    Item,
    Input,
    Form,
    Label,
    Button,
    Thumbnail
} from 'native-base';

export default class RegistrasiScreen extends Component{
    state={
        email:'',
        password:''
    };
    submit=()=>{
        let errors=[];
        if(this.state.email===''){
            errors.push('Email harus diisi terlebih dahulu');
        }

        if(this.state.password===''){
            errors.push('Password harus diisi terlebih dahulu');
        }

        let errors_msg='';
        errors.map(val=>{
            errors_msg += val + '\n';
        })

        if(errors.length > 0){
            Alert.alert(
                "Error!",
                errors_msg,
                [
                   {text: 'oke', onPress:()=>console.log('oke ditekan')} 
                ],
                {cancelable:false}
            );
        }
    }
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <View style={styles.containerStyle}>
                <Image style={styles.bgImageStyle} source={BgImage}/>
                <View style={styles.logoStyle}>
                    <Thumbnail square large source={Logo}/>
                    <Text style={styles.textLogoStyle}>Halaman Login</Text>
                </View>
                <Form style={styles.formLoginStyle}>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputLoginStyle} 
                            onChangeText={(val)=>{this.setState({email: val})}}
                            value={this.state.email} >Username/Email</Text>
                        </Label>
                        <Input style={styles.inputLoginStyle}/>
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            <Text style={styles.inputLoginStyle}
                            onChangeText={(val)=>{this.setState({password: val})}}
                            value={this.state.password}
                            ref={(input) => this.password = input}>Password</Text>
                        </Label>
                        <Input style={styles.inputLoginStyle} secureTextEntry={true} />
                    </Item>
                </Form>
                <Button style={styles.buttonLoginStyle} onPress={this.submit} > 
                    <Text>Register</Text>
                </Button>
                <View style={{alignItems: 'center', marginTop: 10}}>
                    <Text style={{padding: 10}}>Dont have account?
                    <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold'}}
                    onPress={()=>this.props.navigation.navigate('Registrasi')}> Sign Up</Text></Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,

    },
    bgImageStyle:{
        flex:1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    logoStyle:{
        width: '100%',
        height: 100,
        marginTop: 50,
        marginBottom: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textLogoStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginTop: 10,
        fontFamily: 'Playbill'
    },
    formLoginStyle:{
        marginTop: -80,
        paddingLeft: 10,
        paddingRight: 30
    },
    inputLoginStyle:{
        color: 'white',
        marginBottom: 10,
        fontSize: 14
        
    },
    buttonLoginStyle:{
        width: '80%',
        justifyContent: 'center',
        marginLeft: 33,
        marginTop: 20,
        paddingLeft: 10,
        paddingRight: 30,
        backgroundColor: '#f8f1f1'

    },
    
})

