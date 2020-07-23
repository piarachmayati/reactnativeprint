import React, { Component } from 'react';  
import { Alert, AppRegistry, Button, StyleSheet, View } from 'react-native';  
import EscPos from "@leesiongchan/react-native-esc-pos";

const design = `
        Ayam Bang Dava
------------------------------
[ ] Ayam Penyet Sambal Matah
    - Level 3
    - Nasi Merah
    - Telur Setengah Matang
                           x 1
[ ] Es Teh Manis
    - No Sugar
                           x 1   
`; 

export default class App extends Component {  

    onPressButton = async () => {
      try {
        EscPos.setConfig({type: "network"});
    
        await EscPos.connect("192.168.0.22", 9100);
        EscPos.setPrintingSize(EscPos.PRINTING_SIZE_80_MM);
        EscPos.setTextDensity(8);
        await EscPos.printDesign(design);
        await EscPos.cutFull();
        await EscPos.beep();
        //await EscPos.kickDrawerPin();
        await EscPos.disconnect();
      } catch(error) {
        console.error(error);
      }
      Alert.alert('You clicked the button!') 
    }

    render() {  
        return (  
            <View style={styles.container}>  
                <View style={styles.buttonContainer}>  
                    <Button  
                        onPress={this.onPressButton}  
                        title="Press Me"  
                    />  
                </View> 
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
    },  
    buttonContainer: {  
        margin: 20  
    },  
    multiButtonContainer: {  
        margin: 20,  
        flexDirection: 'row',  
        justifyContent: 'space-between'  
    }  
})  