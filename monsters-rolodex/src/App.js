import React, {Component} from 'react'
import {CardList} from './components/card-list/card-list.component'
import './App.css';
import './components/search-box/search-box.styles.css'
class App extends Component{
  constructor(){
    super()
    this.state = {
      monsters: [],
      pattern: '',
      filtered_monsters:[],
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({monsters:users,filtered_monsters:users})});
  }
  handleChange = (e) => {
    var pattern = e.target.value
    var filtered_monsters = this.state.monsters.filter(monster => monster.name.includes(pattern))
    this.setState( { pattern           : pattern, 
                     filtered_monsters : filtered_monsters,
                    })
  }
  render(){
    console.log(this.state)
    return (
      <div className="App">
          <h1> Monsters Rolodex </h1>
          <input className="search" type="text" placeholder="Search..." onInput= {this.handleChange}/> 
          <CardList monsters = {this.state.filtered_monsters} />
      </div>
    );
  }
}

export default App;
