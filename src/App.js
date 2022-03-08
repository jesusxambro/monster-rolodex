import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [
              {
                name:'Maria',
                id: '1234',
              },
              {
                name:'Neftali',
                id: '1234a',
              },
              {
                name:'Freddy',
                id: '123s',
              },
              {
                name:'Linda',
                id: '123d',
              },
            ]
        };
    }
  render() {
    return (
        <div className="App">
        {
          this.state.monsters.map((monster) =>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
        </div>
    );
  }
}

export default App;
