import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  FlatList,
  TextInput,
  Button
} from 'react-native';

export default class App extends Component {
 
 constructor(props){

  super(porps)
   this.state = {
     text:"",
     items: [
       {key:"0",desc:"item 1", done: false},
       {key:"1d",esc:"item 2", done: false}
     ]
   }

   this.inserirItem = this.inserirItem.bind(this)
 }
 

 renderItem(obj){
   return(
     <Text style={styles.cell}>{obj.item.desc}</Text>
   )
 }

 inserirItem(){
   let newItem = {
     key: this.state.items.length.toString(),
     desc: this.state.text,
     done: false
   }

   let items = this.state.items
   items.push(newItem)
   this.setState({items})

   let text = ""
   this.setState({text})

   //alert(JSON.stringfy(this.state))

 }
 
  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.lista} data={this.state.items} renderItem={this.renderItem} extraData={this.state}/>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input} 
            onChangeText={(text) =>{this.setState({text})}}
            value={this.state.text}/>
          <Button onPress={this.inserirItem} title='Inserir' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  lista:{
    marginTop: 24,
  },
  cell: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#E4BEE",
    fontSize: 18,
    marginBottom: 2
  },
  input: {
    backgroundColor:'white',
    borderColor:'#ccc',
    borderWidth: 3,
    padding: 10,
    marign: 20,
    flex: 1
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
