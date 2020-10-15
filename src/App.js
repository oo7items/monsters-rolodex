import React, { Component } from 'react'; 
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.compoment';
import { SearchBox } from './components/search-box/search-box.compoent';
class App extends Component { // App构造函数扩展类名
  constructor() {
    super(); 
    
    this.state = {
      monsters: [],
      searchField: ''
    };
    
  }

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users })); // 这一步将API中users的数据导入我们的怪兽数组中
}

handleChange = e => {
  this.setState({ searchField: e.target.value });
}


  render() {
    const { monsters, searchField} = this.state;
    const filteredMonters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1> monsters rolodex </h1>
        <SearchBox  
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonters} />
      </div>
    );
  }
}
// 类方法和箭头函数
// ES5 bind
// this.handleChange = this.handleChange.bind(this);

// ES5 bind
// handleChange(e) {
//   this.setState({ searchField: e.target.value });
// }


// <CardList monsters={this.state.monsters} />

// {<div className="App">
//   <CardList>
  // {
  //   this.state.monsters.map(monster => (
  //   <h1 key={monster.id}> { monster.name} </h1>
  //   ))
  // }
//   </CardList>
// </div> */}

// {
//   name: 'Frankenstein',
//   id: 'asr1'
// },
// {
//   name: 'Dracula',
//   id: 'asr2'
// },
// {
//   name: 'Zombie',
//   id: 'asr3'
// }


// class App extends Component { // App构造函数扩展类名
//   constructor() {
//     super(); 
    
//     this.state = {
//       string: 'Hello YiHua Zhang'
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             { this.state.string }
//           </p>
//           <button onClick={() => this.setState({ string: 'Hello Andrei' })}>Chang Text</button>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
