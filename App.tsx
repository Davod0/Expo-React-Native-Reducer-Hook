import { StatusBar } from 'expo-status-bar';
import { useReducer } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';


type counterAction = 
{type: "increment"; payload?: number} |
{type: "decrement"} |
{type: "decrement10"} |
{type: "reset"};

function counterReducer(state: number, action: counterAction){
  switch(action.type){
    case 'increment':
      return state + (action.payload ?? 1);
    case 'decrement':
      return state - 1;
    case 'decrement10':
        return state - 10;
    case'reset':
        return 0;
    default:
      action satisfies never; // this is a type guard, it will throw an error if the action is not of type counterAction
      return state;
  }
}

export default function App() {

  const [counter, dispatch] = useReducer(counterReducer, 12);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Pressable style={styles.button} onPress={() => dispatch({type: "increment", payload: 10})}>
        <Text style={styles.buttonText}>+10</Text>
      </Pressable>
     
      <Pressable style={styles.button} onPress={() => dispatch({type: "increment"})}>
        <Text style={styles.buttonText}>+1</Text>
      </Pressable>
      
      <Pressable style={styles.button} onPress={() => dispatch({type: "reset"})}>
        <Text style={styles.buttonText}>Reset</Text>
      </Pressable>
      <Text style={styles.counterText}>{counter}</Text>

      <Pressable style={styles.button} onPress={() => dispatch({type: "decrement"})}>
        <Text style={styles.buttonText}>-1</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => dispatch({type: "decrement10"})}>
        <Text style={styles.buttonText}>-10</Text>
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
    flexDirection: 'column',
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
