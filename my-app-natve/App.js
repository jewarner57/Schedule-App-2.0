import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textItem}>Open up App.js to start working on your app!</Text>
        
        <Note name=''></Note>
        
      </View>
    );
  }
}

class Note extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {text: "place Holder"}
    }    

    render() {
        return (
            <View>
                <Text>Hello, {this.props.name}</Text>
            
                <TextInput
            
                    style={styles.textInput}
                    value= {this.state.text}
                    onChangeText={(text) => this.setState({text})}
            
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    textItem: {
        
        color: 'blue',
        
    },
    
    textInput: {
        width: 200,
    },
});
