// import { Component } from "react";

import { useState, useEffect } from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.components";
import "./App.css";


const App = () => {
  const [searchField, setSearchField] = useState('');
  // const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("rendering");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  },[])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
    // console.log('effect is fired');

  },[monsters, searchField]);

  const onSearchChange = (event) => {
    const SearchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(SearchFieldString);
  }
  
  // const onTitleChange = (event) => {
  //   const SearchFieldString = event.target.value.toLocaleLowerCase();
  //   setTitle(SearchFieldString);
  // }

  // console.log(filteredMonsters);

  return (
    <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        {/* <h1 className="app-title">{title}</h1> */}
        <SearchBox onChangehandler={ onSearchChange } placeholder='search monsters' className='monsters-search-box'/>
        {/* <br />
        <SearchBox onChangehandler={ onTitleChange } placeholder='set Title' className='Title-search-box'/> */}
        <CardList monsters={ filteredMonsters }/>
      </div>
  )
}



// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     console.log("DidMount");
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {

//     const searchField = event.target.value.toLocaleLowerCase(); //it will ower case all the string

//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox onChangehandler={ onSearchChange } placeholder='search monsters' className='monsters-search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
