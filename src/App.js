import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField:'',
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response =>
            response.json())
            .then((users) => this.setState(() =>{
                return {monsters: users}
            },
                    () => {
                console.log(this.state);
                    }
                    )
                );
    }
    onSearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(()=>{
            return{ searchField};
        });
    };

    render() {
        console.log('render');
        const { monsters, searchField}= this.state;
        const {onSearchChange} =this;

        const filteredMonsters = monsters.filter((monster) =>{
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

    return (
        <div className="App">
            <input
                className='search-box'
                type='search'
                placeholder='search monsters'
                onChange={onSearchChange}
            />
            {filteredMonsters.map((monster) =>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
        </div>
    );
  }
}

export default App;
