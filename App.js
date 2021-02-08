import React from 'react';
import {DrawerLayoutAndroid, Image, Text, TextInput, View, StyleSheet} from 'react-native';

const App = () =>{
  return (
    <StylingReactNativeComponent/>
  );
};

const StylingReactNativeComponent = () =>{
  return(
    <View style={{flex:1, backgroundColor: '#FFF',}} >
      <View style={{flex: 1, marginHorizontal: 10}} >
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20}} >
          <View style={{backgroundColor: '#f5f4f4', width: '50%', height: 80,borderWidth: 1, borderColor: '#a6a9b6', elevation: 1}} >
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15}} >
              <Image source={{uri: 'https://placeimg.com/100/100/nature'}}
              style={{width: 50, height: 50, marginTop: 15, borderRadius: 65}}/>
              <Text style={{color: 'black', marginLeft: 15, marginTop:10 }} >Emas</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#f5f4f4', width: '50%', paddingLeft: 3, justifyContent:'space-between',borderWidth: 1, borderColor: '#a6a9b6'}} >
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 8}}>
              <Image source={{uri: 'https://placeimg.com/100/100/arch'}}
              style={{width: 50, height: 50, marginTop: 15, borderRadius: 65}}/>
              <Text style={{color: 'black', marginLeft: 15, marginTop:10 }} >Rahn (Gadai)</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20, }} >
          <View style={{backgroundColor: '#f5f4f4', width: '50%', height: 80, borderWidth: 1, borderColor: '#a6a9b6'}} >
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15}} >
              <Image source={{uri: 'https://placeimg.com/100/100/people'}}
              style={{width: 50, height: 50, marginTop: 15, borderRadius: 65}}/>
              <Text style={{color: 'black', marginLeft: 15, marginTop:10}} >Cabang</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#f5f4f4', width: '50%', paddingLeft: 3, justifyContent:'space-between', borderWidth: 1, borderColor: '#a6a9b6'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 8}}>
              <Image source={{uri: 'https://placeimg.com/100/100/tech'}}
              style={{width: 50, height: 50, marginTop: 15, borderRadius: 65}}/>
              <Text style={{color: 'black', marginLeft: 15, marginTop:10}} >Pembayaran</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20}} >
          <View style={{backgroundColor: '#f5f4f4', width: '50%', height: 80,borderWidth: 1, borderColor: '#a6a9b6'}} >
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15}} >
              <Image source={{uri: 'https://placeimg.com/100/100/animals'}}
              style={{width: 50, height: 50, marginTop: 15, borderRadius: 65}}/>
              <Text style={{color: 'black', marginLeft: 15, marginTop:10 }} >Cabang</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#f5f4f4', width: '50%', paddingLeft: 3, justifyContent:'space-between',borderWidth: 1, borderColor: '#a6a9b6'}} >
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15}}>
              <Image source={{uri: 'https://placeimg.com/100/100/animals/sepia'}}
              style={{width: 50, height: 50, marginTop: 15, borderRadius: 65}}/>
              <Text style={{color: 'black', marginLeft: 15, marginTop:10 }} >Produk</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginTop: 20}} >
          <View style={{backgroundColor: '#f5f4f4', width: '50%', height: 80,borderWidth: 1, borderColor: '#a6a9b6'}} >
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 15}} >
              <Image source={{uri: 'https://placeimg.com/100/100/people/sepia'}}
              style={{width: 50, height: 50, marginTop: 20, borderRadius: 65}}/>
              <Text style={{color: 'black', marginLeft: 15, marginTop:10 }} >MPO</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1687a7',
    marginTop: 20,
    marginLeft: 0,
    borderWidth: 1,
    borderColor: '#121013',
  }
});


const SampleComponent = () =>{
  return(
    <View>
      <View style={{width:80, height: 80, backgroundColor: '#b67171'}}/>
      <Text>Barid Rais</Text>
      <Rais/>
      <Text>Daru Ragil</Text>
      <Text>Reval Fahmi</Text>
      <Photo/>
      <TextInput style={{borderWidth: 2}}/>
    </View>
  );
}

const Rais = () =>{
  return <Text>J3C118046</Text> 
} 

const Photo = () =>{
  return (
  <Image source={{uri : "https://placeimg.com/100/100/tech"}} 
  style={{width: 100, height: 100}}/>
  );
}

export default App;