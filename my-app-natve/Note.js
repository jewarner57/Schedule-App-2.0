import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';

export default class Note extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.onSubmit = this.onSubmit.bind(this);
        this.removeSelectedToDoItem = this.removeSelectedToDoItem.bind(this);
        this.boldText = this.boldText.bind(this);
        
        const toDoItem = [];
        
        toDoItem.push({
            
            id: 1,
            displayedText: "Text",
            checked: false,
            textDecoration: "none"
            
        })
        
        this.state = {textValue: "Enter Text Then Press Submit", toDoItem: [], toDoItemCount: 1};
    }    

    
    onSubmit(event) {
        
        const toDoItemArray = [...this.state.toDoItem];
        const toDoItemIDCounter = this.state.toDoItemCount + 2;
        this.setState({toDoItemCount: toDoItemIDCounter});
        const textValue = this.state.textValue;
        
        
        toDoItemArray.push({
            
            id: this.state.toDoItemCount,
            displayedText: textValue,
            checked: false,
            textDecoration: "none"
            
        })
        
        this.setState({toDoItem: toDoItemArray, currentTextVal: textValue, toDoItemCount: this.state.toDoItemCount+1});
        
        event.preventDefault();
        
    }
    
    removeSelectedToDoItem() {
        
        const currentToDoItem = [...this.state.toDoItem];
        let newToDoItemList = [];
        
        for(let i = 0; i < currentToDoItem.length; i++) {
            
            if(currentToDoItem[i].checked == false) {
                newToDoItemList.push(currentToDoItem[i]);
            }
            
        }
        
        this.setState({toDoItem: newToDoItemList})   
        
    }
    
    boldText() {
        
        const newToDoItem = [...this.state.toDoItem];
        
        for(let i = 0; i < newToDoItem.length; i++) {
            
            if(newToDoItem[i].checked == true) {
                if(newToDoItem[i].textDecoration == 'none') {
                    newToDoItem[i].textDecoration = 'bold'
                }
                else {
                    newToDoItem[i].textDecoration = 'none'
                }
            }
        }
        
        this.setState({toDoItem: newToDoItem}) 
        
    }
    
    render() {
        
        
        
        return (
            <View>
            
                <TextInput
            
                    style={styles.textInput}
                    value = {this.state.textValue}
                    onChangeText={(textValue) => this.setState({textValue})}
            
                />
                
                
                {this.state.toDoItem.map((toDoItem , index) => (
                    <View key={toDoItem.id+1}>
                        <Text key={toDoItem.id} style={styles.none}>{toDoItem.displayedText}</Text>
                    
                        <Switch 
                            key={index} 
                            onValueChange={(value) => toDoItem.checked = value} value = {toDoItem.checked} 
                        />
                                         
                    </View>
                ))}
                
                <Button onPress={this.onSubmit} title="Submit"/>
                <Button onPress={this.removeSelectedToDoItem} title="Delete"/>
                <Button onPress={this.boldText} title="Bold"/>    
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textInput: {
        width: 200,
        marginBottom: 20,
    },
    
    bold: {
    
        fontSize: 20,
    
    },
    
    none: {
        
        fontSize: 10,
    },
});