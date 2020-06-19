import React, { Component, Fragment, useState } from 'react';
import ReactSearchBox from 'react-search-box';
import NewToDo from './components/Button'
import Winner from './components/Winner'
import PokemonList from './components/PokemonList'
import { Container, Row, Col } from 'react-bootstrap';

// Used to get bootstrap columns working
import 'bootstrap/dist/css/bootstrap.min.css';
 
const API = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10';
const DEFAULT_QUERY = 'redux';
 
class App extends Component {
  constructor(props) {
    super(props);

    this.addHandler = this.addHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
    this.addBattleLeftHandler = this.addBattleLeftHandler.bind(this);
    this.addBattleRightHandler = this.addBattleRightHandler.bind(this);
 
    this.state = {
      hits: [],
      pokemon: {},
      word: "",
      setWord: "",
      filterDisplay: [],
      setFilterDisplay: [],
      collection: [],
      leftBattle: [],
      rightBattle: [],
    };
  }

  componentDidMount() {

    // get a list of pokemon
    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())
      .then(data => {
        this.setState({ hits: data.results })
        console.log(data);
        return(data);
      })

     // get individual pokemon data
      .then((data) => {
        console.log(data.results)
        const promises = data.results.map((pokemon) => {
            let url = `${pokemon.url}`
            let req = new Request(url, {
                method: 'GET',
                headers: {}
            })

          
            // State results into pokemon array
            return fetch(req)
                .then(response => response.json())
                .then((json) => {
                    console.log(json);
                    
                      this.setState({
                          ...this.state,
                          pokemon: {
                              ...this.state.pokemon,
                              [json.id]: json
                          }
                      })    
                })
        })
        return Promise.all(promises)
    });
  }

  // componentDidUpdate(e) {
  //   setWord(e);
  //   let oldList = pokemons.map(pokemon => {
  //     return{ name: pokemon.name.toLowerCase(), id: pokemon.id 
  //     };
  //   });

  //   if (word !== "") {
  //     let newList = [];

  //     newList = oldList.filter(pokemons =>
  //       pokemon.name.includes(word.toLowerCase())
  //     );

  //     setFilterDisplay(newList);
  //   } else {
  //     setFilterDisplay(pokemons);
  //   }


  // };

  // Add pokemon to collection
  addHandler(e) {
    console.log("adding: " + e.name)
    this.setState({

        collection: {
          ...this.state.collection,
          [e.id]: e
      }

    });
  }

  // Remove pokemon from collection
  removeHandler(e) {
    console.log("removing: " + e.name)

    const copyCol= {...this.state.collection}
    delete copyCol[e.id]
    this.setState({
        collection: copyCol,
    });
  }

  addBattleLeftHandler(e) {
    console.log("leftBattle: " + e.name)
    var newArray = [e]
    this.setState({

      leftBattle: newArray,
      
      });
  }

  addBattleRightHandler(e) {
    console.log("rightBattle: " + e.name)
    var newArray = [e]
    this.setState({

      rightBattle: newArray,
      
      });
  }

  render() {
    const { pokemon, rightBattle, leftBattle } = this.state;
    const { collection } = this.state;

    var arr = [];
    var colArr = [];
    var searchArray = []

    for (var key in pokemon) {
      arr.push(pokemon[key]);
      searchArray.push({key: pokemon[key].id, value: pokemon[key].name})
    }

    for (var key in collection) {
      colArr.push(collection[key]);
    }
 
    return (
      <Container>

        {/* Battle */}
        <Row>
          Battle
          <Col>
            Left Pokemon
            <PokemonList pokemon={leftBattle} />
          </Col>
          <Col>
            Right Pokemon
            <PokemonList pokemon={rightBattle} />
          </Col>
          <Row>
            <Winner
              left={leftBattle}
              right={rightBattle}
            />
          </Row>
        </Row>

        {/* Search bar*/}
        <Row>
          <Col>
            <ReactSearchBox
              placeholder="search"
              value=""
              data={searchArray}
              callback={record => console.log(record)}
              onSelect={record => console.log(record)}
            />
          </Col>

        {/* Content */}

            {/* Pokemon List */}
            <Col>
            All Pokemon
              <PokemonList 
                pokemon={arr} 
                action={this.addHandler} 
                type="add" 
                collection={collection} 
                battleLeft={this.addBattleLeftHandler}
                battleRight={this.addBattleRightHandler}
              />
            </Col>

            {/* Collection List */}
            <Col>
            Collection
              <PokemonList 
                pokemon={colArr} 
                action={this.removeHandler} 
                type="remove" 
                collection={collection}
              />
            </Col>

        </Row>
      </Container>
    );  
  }
}
 
export default App;

// import React from 'react';
// import ToDoList from './ToDoList'
// import NewToDo from './NewToDo'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentItem: {
//         name: ''
//       },
//       todos: [
//         { name: 'laundry' },
//         { name: 'buy groceries' },
//         { name: 'mow lawn' }
//       ]
//     }
//   }

//   handleChange(event){
//     this.setState({
//       currentItem: {
//         name: event.target.value 
//       }
//     })
//   }

//   handleSubmit(event) {
//     this.setState({
//        todos: this.state.todos.concat(this.state.currentItem),
//        currentItem: {
//          name: ''
//        }
//     })
//     event.preventDefault()
//   }

//   render() {
//     return (
//       <div className="App">
//         <ToDoList todos={ this.state.todos} />
//         <NewToDo onChange={ this.handleChange.bind(this) } onSubmit={ this.handleSubmit.bind(this)} />
//       </div>
//     );
//   }
// }

// export default App;


// Primarily: they force you to think from the perspective of the user.

// As a user, I want to be able to search for a specific Pokemon so that I can see all of the important/relevant information about them.
// As a user (who is new to Pokemon and doesn’t know any names to search!), I want to click on a “View All” (or similar) button and look at page with pictures of all the pokemon so that I can click on the picture and learn more about them! 
// As a user I want to click on a “View similar types” button for a specific pokemon and I will see a list of other pokemon with the same type.
// As a user, I want each Pokemon to have a  “collect” feature so that I can add it to my collection if I like it.
// As a user, I want to have a “view collection” feature so that I can view my whole collection at any time 
// As a user, I want there to be a “battle” feature where I can see who would win between two Pokemon  (here, you can select two Pokemon and have them battle, and based on some criteria, you determine the winner)
// As a user, I want there to be a “Grocery List” feature that tells me all the foods I need to buy when I go to the store so that I can feed my Pokemon! 
