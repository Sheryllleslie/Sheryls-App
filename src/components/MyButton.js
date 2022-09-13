import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function AppButton(props) {
    function randomSong() {
    console.log("It's a love story, baby, just say yes")
    }

    return (
    <Pressable onPress = {randomSong} style={styles.buttonStyle}>
        <Text style={styles.textStyle}> {props.ButtonText} </Text>
      </Pressable>
  );
}


const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#B28765',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
