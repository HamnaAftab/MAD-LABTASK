import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.parent_container}>
      <View style={styles.small}>
        <Text style={styles.txt}>SnapChat</Text>
      </View>
      <Text style={styles.welcome}>Welcome Back!</Text>
      <TouchableOpacity style={styles.btn}><Text style={styles.txt1}>Login Via Google</Text></TouchableOpacity>
      <Text style={{fontSize:15,}}>or</Text>
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="   Email"></TextInput>
        <TextInput style={styles.input1} placeholder="   Password"></TextInput>
        <Text style={{fontSize:15,paddingLeft: 200,}}>Forget Password?</Text>
        <TouchableOpacity style={styles.btn1}><Text style={styles.txt1}>Login</Text></TouchableOpacity>
        <Text style={{fontSize:15, paddingTop:40,}}>Thank you for Signup</Text>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  parent_container: {
    width: 400,
    height: 400,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    flex: 1,
    borderWidth:1,
  },
  welcome:{
    fontFamily:'sansarif',
    fontSize:40,
    fontWeight:'bold',
    fontStyle:'italic'
  },
  small: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
    height: 40,
    width: 398,
    paddingBottom: 50,
  },
  btn: {
    fontSize: 30,
    backgroundColor: 'yellow',
    borderRadius: 20,
    width: '60%',
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
    marginTop: '10%'
  },
  input_container: {
    width: 398,
    height: 500,
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: 'center',

  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: "#e6e8e6",
    borderRadius: 13,
    margin: '2%',
  },
  input1: {
    width: 300,
    height: 50,
    backgroundColor: "#e6e8e6",
    borderRadius: 13,
    margin: '2%',
  },

  txt: {
    fontFamily: "sansarif",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    Color: 'white',
    paddingTop: 45,
  },
  txt1: {
    fontFamily: "sansarif",
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    Color: 'yellow',
  },
  btn1: {
    fontSize: 30,
    backgroundColor: 'yellow',
    borderRadius: 20,
    width: '60%',
    textAlign: 'center',
    padding: 6,
    fontWeight: 'bold',
    marginTop: '10%'
  }

});
