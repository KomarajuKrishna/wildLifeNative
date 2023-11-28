import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button, Switch} from 'react-native';

//BASIC Components::

export default function App() {
  const [name, setName] = useState('')
  const [isEnabled, setIsEnabled] = useState(false)

  const eventHandlder = (text) =>{
    setName(text)
  }

  const onClick = ()=>{
    console.log(name)
  }

  const switchStatus = ()=>{
    setIsEnabled((prevState) => !prevState)
  }

  const bgColor = isEnabled ? 'black' : 'white'
  const textColor = isEnabled ? 'white' : 'black'

  return (
    <View style={styles.container} backgroundColor= {bgColor}>
      <ScrollView style= {styles.scrollView} showsVerticalScrollIndicator={false}>
      <Text style= {[styles.heading, {color: 'skyblue'}]}>Wild Life</Text>
      <Text style={styles.subHeading}>Tiger</Text>
      <Switch 
        trackColor={{false: 'black', true: 'white'}}
        thumbColor={isEnabled ? 'white': 'black' }
        onValueChange={switchStatus}
        value={isEnabled}
      />
      <TextInput 
        style={[styles.textInput, {color: textColor}]}
        placeholderTextColor={textColor}
        placeholder='Search For Your Favourite Animal'
        onChangeText={eventHandlder}
        value={name}
      />
      <Button 
        style={styles.button}
        color='green'
        title='Submit'
        onPress={onClick}
      />
      <Image
      style={styles.image} 
        source={{uri:'https://cdn.firstcry.com/education/2022/04/25155522/1378635314.jpg'}} 
      />
        <Text style={[styles.contentStyle, {color: textColor}]}>
          Easily recognized by its coat of reddish-orange with dark stripes, 
          the tiger is the largest wild cat in the world. The big cat's tail 
          is three feet long. On average the big cat weighs 450 pounds, about 
          the same as eight ten-year-old kids. It stands three feet tall with 
          teeth four inches long and claws as long as house keys.{'\n'}
          {'\n'}
          A female tiger gives birth to a litter of three or four cubs, 
          who she will care for until they are a year-and-a-half old. 
          These cubs quadruple in size during their first month! {'\n'}
          {'\n'}
          The powerful predator generally hunts alone, able to bring 
          down prey such as deer and antelope. Tigers wait until dark to hunt. 
          The tiger sprints to an unsuspecting animal, usually pulling it off its 
          feet with its teeth and claws. If the prey animal is large, the tiger bites 
          its throat to kill it; smaller prey is usually killed when the tiger breaks its neck. 
          Tigers have been known to eat up to 80 pounds of meat in one night, but more often they 
          consume about 12 pounds during a meal. It may take days for a tiger to finish eating its kill. 
          The cat eats until it's full, and then covers the carcass with leaves and dirt. 
          The tiger comes back to feed some more.{'\n'}
          {'\n'}
          Tigers live far apart from each other. 
          A tiger knows if it is in another tiger’s territory 
          based on the trees around him. Each tiger marks the trees in its area 
          with urine and special scratches.
        </Text>

      <StatusBar style="auto" />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10
  },
  image: {
    width: 395,
    height: 400,
    marginTop: 8

  },
  heading: {
    alignSelf: 'center',
    margin: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black'
  },
  subHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 13,
    marginLeft: 20,
    textDecorationLine: 'underline',
    color: 'red'
  },
  scrollView: {
    marginHorizontal: 10,
    margin: 20
  },
  contentStyle: {
    fontSize: 15,
    marginTop: 4
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 2,
    height:40,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  button:{
    borderColor:"red"
  }
});
