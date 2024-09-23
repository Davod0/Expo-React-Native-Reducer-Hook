import { StatusBar } from 'expo-status-bar';
import { useReducer, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function counterReducer(state: number, action: any){
  switch(action.type){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

export default function App() {

  const [counter, dispatch] = useReducer(counterReducer, 12);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable style={styles.button} onPress={() => dispatch({type: "increment"})}>
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
      
      <Text style={styles.counterText}>{counter}</Text>

      <Pressable style={styles.button} onPress={() => dispatch({type: "decrement"})}>
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
  },
  counterText: {
    fontSize: 80,
    marginBottom: 40,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 5,
    margin: 30
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
});
