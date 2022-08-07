import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css'; 

const App = () => {
  
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters)
  
  
  console.log("render");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, [])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterMonsters(newfilteredMonsters)
  }, [monsters, searchField])


  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };


  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox
        className="monsters-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

// class App extends Component {
  
//   constructor() {
//     super()
    
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//     console.log("constructor");
//   }

//   componentDidMount() {
//     console.log('componentDidMount')
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//         () => {
//           console.log(this.state)
//         }
//       ));                                    //console.log(users))
//   }

//   onSearchChange = (event) => { 
//             console.log(event.target.value)
//             const searchField = event.target.value.toLocaleLowerCase()
//             this.setState(() => {
//               return { searchField}
//             })
//           }

//   render() {
//     console.log('render')

//     const { monsters, searchField } = this.state
//     const {onSearchChange} = this
//       const filteredMonsters = monsters.filter(
//          (monster) => {
//           return monster.name.toLocaleLowerCase().includes(searchField);
//           });
//     return 
//   }
// }

export default App;
