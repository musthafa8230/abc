import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,Image ,TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements'
export default class App extends React.Component {
  render() {
    return (
       <View style={{flex:1}}>
          <View style={{flex:1,flexDirection:'row'}}>
              <Image style={{width:'100%',flex:1.5,height:'100%',resizeMode:'contain'}} source={require('./assets/movable01.png')}>
                 
              </Image>    

              <Image style={{flex:1,width:'100%',height:'100%',resizeMode:'contain',justifyContent:'center',alignItems:'flex-end'}} source={require('./assets/light.jpg')}>
                    
                   
              </Image>
                           

          </View>
          <View style={{flex:4}}>
              <ImageBackground style={{flex:1,width:'100%',alignItems:'center',height:'100%',justifyContent:'flex-end',resizeMode:'contain'}} source={require('./assets/yellowsofa.jpg')}>
                 <View style={{flex:4.5,width:'90%',height:'100%',paddingLeft:20,borderRadius:10,backgroundColor:'#fff',elevation:10}}>
                        <Text style={{fontSize:30,paddingTop:10}}>Register</Text>
                        <Text style={{fontSize:14,color:'black',paddingBottom:10,paddingTop:10}}>User Name</Text>
                        <TextInput style={{width:'90%',fontSize:15,elevation:5,borderColor:'grey',borderRadius:15,paddingLeft:'3%',backgroundColor:'#fff',height:40}}
                       placeholder="Email/Mobile"/>
                        <Text style={{fontSize:14,color:'black',paddingTop:20,paddingBottom:10}}>Password</Text>
                        <TextInput style={{width:'90%',fontSize:15,elevation:5,borderColor:'grey',borderRadius:15,height:40,backgroundColor:'#fff',paddingLeft:'3%'}}
                       placeholder="***********"/>
                            

                            <View style={{width:'90%',height:40,justifyContent:'center',alignItems:'center'}}> 
                           
                            <View style={{backgroundColor:'black',width:'90%',height:1}}/>  
                            </View>
                            <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#4267b2',fontSize:14,fontWeight:'bold'}}>Forget Password ?</Text>
                
                  </TouchableOpacity>
                            <View style={{justifyContent:'center',alignItems:'center',paddingRight:25,paddingTop:20}}>
                             <TouchableOpacity style={{width:'80%',height:40,elevation:20,borderRadius:30,backgroundColor:'#fee16a',justifyContent:'center',alignItems:'center'}} >
                    <Text>Log in</Text>
                 </TouchableOpacity>   
                           


                             </View>
                 </View>
                 <View style={{flex:.75,borderBottomRightRadius:10,borderBottomLeftRadius:10,flexDirection:'row',width:'80%',height:'80%',justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>

                          <Text style={{color:'grey',fontSize:12}}>No registered account yet?</Text>
                           <TouchableOpacity style={{paddingLeft:10,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#fee16a',fontSize:16,fontWeight:'bold'}}>Sign Up</Text>
                
                  </TouchableOpacity>

                 </View>
                 <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',width:'80%',height:'100%'}}>
                       <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                 <Image style={{width:'50%',height:'100%',resizeMode:'contain',justifyContent:'center',alignItems:'flex-end'}} source={require('./assets/twitter.png')}/>     
                       </TouchableOpacity>    
                        <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                 <Image style={{flex:1,width:'50%',height:'100%',resizeMode:'contain',justifyContent:'center',alignItems:'flex-end'}} source={require('./assets/f.png')}/>     
                
                  </TouchableOpacity>  
                  <TouchableOpacity style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                 <Image style={{flex:1,width:'50%',height:'100%',resizeMode:'contain',justifyContent:'center',alignItems:'flex-end'}} source={require('./assets/google-plus-logo-button.png')}/>     
                
                  </TouchableOpacity>    

                  
                 </View>
              </ImageBackground>
              
          </View>
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
