import { useRouter } from 'expo-router';
import { Image, StyleSheet, Platform, Text, View, ImageBackground, SafeAreaView, TouchableOpacity } from 'react-native';



export default function secondscreen() {
  const btImage = require("../../assets/images/coding.jpg")
  const router =useRouter()
  return (
   <ImageBackground style={styles.backgroundImage} source={btImage}>
      <View>
        <TouchableOpacity  onPress={()=>{
                router.push("/sign-down")
      
              }}>
                <View style={styles.getStartedbtn} >
                  <Text style={{width:200, textAlign:"center",fontSize:30, color:"white"}}>Sign Up</Text>
                  </View>     
         </TouchableOpacity >
      </View>
      
         <TouchableOpacity  onPress={()=>{
                router.push("/sign-off")
      
              }}>
         
             <View style={styles.getStartedbtm} >
                <Text style={{width:200, textAlign:"center",fontSize:30, color:"black",alignItems:"center"}}>Log In</Text>
                 </View>
           </TouchableOpacity >
        
        
   </ImageBackground>
    
  )
}

const styles = StyleSheet.create({
  title:{
    fontSize:90,
    color:"grey",
    width:200,
    textAlign:"center"
  },
  backgroundImage:{width:"100%",height:"100%", alignItems:'center',justifyContent:"space-between"},
  opacityContainer:{
    width:300,
    height:150,
    opacity:0.50,
    backgroundColor:"#ffffff",
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center",
    marginTop:50,
    backdropFilter:"blur(30px)"
  },
  helloText:{
    fontSize:50,
    width:"100%",
    height:"100%",
    verticalAlign:"middle",
    textAlign:"center",
    color:""
  },
  getStartedbtn:{
    backgroundColor:"brown",
    opacity:0.8,
    borderRadius:1000,
    width:"80%",
    height:70,
    margin:"auto",
    alignItems:"center",
    justifyContent:"center",
    marginTop:300,
    verticalAlign:"auto"
  },
  getStartedbtm:{
    backgroundColor:"white",
    opacity:0.5,
    borderRadius:1000,
    width:"80%",
    height:70,
    margin:"auto  ",
    alignItems:"center",
    justifyContent:"center",
    marginBottom:50,
    verticalAlign:"auto",

  }
});