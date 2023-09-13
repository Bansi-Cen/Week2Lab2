
import React, { useState } from "react";
import { View, Text, TextInput,Button, StyleSheet, Switch } from "react-native";

export default function HelloWorldApp() {
  const [value, onChangeText] = 	React.useState('Type anything');  

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // Task 1 and Task 2
  return (  
  <View style={styles(isEnabled).container}>

    <TextInput style={styles(isEnabled).edit}
	    onChangeText={text => onChangeText(text)}
      clearTextOnFocus="true"
      value={value}
    />
    <Text style={styles(isEnabled).text}>{value}</Text>
    <Button color="#536878"
       onPress={() => onChangeText('')}
 	      title="Clear" 
       />
       <View style={{flexDirection : 'row'}}>
       <Text style={styles(isEnabled).text}>Light</Text>
   
       <Switch
        trackColor={{false: '#767577', true: '#536878'}}
        thumbColor={isEnabled ? '#708090' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={styles(isEnabled).text}>Dark</Text>
      </View>
   </View> 
  );
}
const styles = (isEnabled) => StyleSheet.create({
  container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center',
    backgroundColor: isEnabled ? '#000000' : '#ffffff'
      },
  edit: {
    color: isEnabled ? '#fff' : '#000',
       fontSize : 14,
       height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: isEnabled ? 'gray' : '#000',
    borderRadius: 10,
  },
  text: {
       fontSize : 14,
       margin: 12,
        color: isEnabled ? '#fff' : '#000',
  }
});

