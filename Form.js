import React,{useState} from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Image,TouchableOpacity, Alert } from 'react-native'

import axios from "axios"


const Form = () => {

    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const [country, setcountry] = useState("")
    const [mobile, setmobile] = useState("")
    const [code, setcode] = useState("")
    const [gender, setgender] = useState("")
    const [fcm, setfcm] = useState("")

    function submit(){
        const data = {
            firstname : fname,
            lastname : lname, 
            email ,
            password :pass,
            country_iso : country,
            mobile_code : code,
            mobile_number : mobile,
            gender , 
            fcmToken : fcm
        }

        console.log("Data: ", data)
        axios.post('https://mymobiletoolsandtrades.com/apis/register', data)
          .then(function (response) {
            console.log("Submitted");
            Alert.alert("Submitted")
          })
          .catch(function (error) {
            console.log(error);
          });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Register</Text>
            <View
                style={{ height: "85%", marginTop: 15, }}
            >
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    horizontal={false}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={{ padding: 18, }}
                >

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/user.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setfname(text)}
                            // value={number}
                            placeholder="First Name"
                        // keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/user.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setlname(text)}
                            // value={number}
                            placeholder="Last Name"
                        // keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/email.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setemail(text)}
                            // value={number}
                            placeholder="Email"
                        // keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/padlock.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setpass(text)}
                            // value={number}
                            secureTextEntry={true}
                            placeholder="Passowrd"
                        // keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/home.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setcountry(text)}
                            // value={number}
                            placeholder="Country iso"
                        // keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/telephone.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setmobile(text)}
                            // value={number}
                            placeholder="Mobile Number"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/padlock.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setcode(text)}
                            // value={number}
                            placeholder="Mobile code"
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/user.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setgender(text)}
                            // value={number}
                            placeholder="Gender"
                            
                        />
                    </View>


                    <View style={styles.inputContainer}>
                        <Image source={require("./assets/user.png")} style={{ width: 25, height: 25, marginLeft: 15 }} resizeMode="contain" />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text)=>setfcm(text)}
                            // value={number}
                            placeholder="Fcm token"
                        // keyboardType="numeric"
                        />
                    </View>



                    <TouchableOpacity onPress={()=>submit()}
                    style={{ backgroundColor: "teal", width: "50%", alignItems: 'center', justifyContent: 'center', alignSelf: "center", elevatiom: 10, borderRadius: 10, marginTop: 20 }}>
                        <Text style={{ padding: 10, color: "white", fontSize: 18 }}>Submit</Text>
                    </TouchableOpacity>




                </ScrollView>
            </View>

        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        padding: 5,
        justifyContent: "space-around",
        // flex:1
        // backgroundColor: "white",
    },
    h1: {
        fontWeight: "bold",
        fontSize: 35,
        paddingTop: 15,
        paddingHorizontal: 15
    },
    input: {
        height: 40,
        margin: 12,
        fontSize: 16,
        padding: 10,
        width: "80%"
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        width: "100%",
        backgroundColor: "white",
        elevation: 14,
        marginTop: 20,
        borderRadius:5
    }
})
