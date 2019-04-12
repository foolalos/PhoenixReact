import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      pokemon: [],
      url: 'https://pokeapi.co/api/v2/pokemon/'
    }

  }

  componentDidMount(){
    this.getPokemon();
  }

  getPokemon = () => {

    this.setState({ loading:true })

    fetch(this.state.url)
    .them(res => res.json())
    .then(res => {

      this.setState({
        pokemon: res.results,
        url: res.next,
        loading: false
      })

    });

  };

  render (){
    if (this.state.loading){
      return(
        <View style={styles.container}>
          <Text>Descargando Pokemon</Text>
        </View>
      );
    }

    return(
      <View style={{felx: 1, paddingTop:50, paddingleft:5}}>
        <FlatList
            data={this.state.pokemon}
            renderItem={
              ({itme}) => <Text> { item.name } </Text>
            }
        />

      </View>
    };
  }
}
ReactDOM.render(<App />, document.getElementById('mount'))
