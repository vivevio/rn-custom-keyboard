import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

import RNKeyboard from './src/components/RNKeyboard';

class App extends Component {

  
  constructor(props) {
    super(props)
    
    this.state = {
      output: [],
      result: ''
    }
    this.tutHasPressed = this.tutHasPressed.bind(this);
    this.onDeleted = this.onDeleted.bind(this);
  }

  tutHasPressed(res) {

    var output = this.state.output;
    output.push(res);
    console.log(output)

    this.setState(
      {
        output: output
      }
    ,()=>{
      console.log(this.state.output)
    })
  }

  onDeleted() {
    var output = this.state.output;
    output.pop();
    console.log(output)

    this.setState(
        {
          output: output
        }
      ,()=>{
        console.log(this.state.output)
      })
    }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.output}>
          <Text>{  this.state.output.join('') }</Text>
        </View>
        <View style={ {position: 'absolute', bottom: 10, } }>
          <RNKeyboard onTutPressed={this.tutHasPressed} onDeleted={this.onDeleted} />
        </View>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

