// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".


// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      bitcoin: [],
      url: 'https://api.coinmarketcap.com/v1/ticker/bitcoin/'
    }

  }

  componentDidMount(){
    this.getbitcoin();
  }

  getbitcoin = () => {

    this.setState({ loading:true })

    fetch(this.state.url)
    .them(res => res.json())
    .then(res => {

      this.setState({
        bitcoin: res.results,
        url: res.next,
        loading: false
      })

    });

  };

  render (){
    if (this.state.loading){
      return(
        <View style={styles.container}>
          <Text>Bitcoin</Text>
        </View>
      );
    }

    return(
      <View style={{felx: 1, paddingTop:50, paddingleft:5}}>
        <FlatList
            data={this.state.bitcoin}
            renderItem={
              ({itme}) => <Text> { item.name } </Text>
            }
        />

      </View>
    };
  }

  ReactDOM.render(
    <HelloReact/>,
    document.getElementById("hello-react")
  )
