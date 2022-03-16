import { useState, useEffect } from "react";

import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.components';

const App = () => {
   
    const [searchField, setSearchField] = useState(''); //initialize state for search box
    const [monsters, setMonsters] = useState([]); //Initialize state for the monsters as an empty array 
    const [ filteredMonsters, setFilterMonsters] = useState(monsters);

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then((users) => setMonsters(users)
        );

    },[]);

    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });
        setFilterMonsters(newFilteredMonsters);
    },[monsters,searchField]);

    


    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
        }

    // const filteredMonsters = monsters.filter((monster) => {
    //     return monster.name.toLocaleLowerCase().includes(searchField);
    //     });

        

    return (
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox
                className='monsters-search-box'
                onChangeHandler={onSearchChange}
                placeholder='search monsters'/>

            <CardList monsters={filteredMonsters}/>
        </div>

    );
}

// class App extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             monsters: [],
//             searchField: '',
//         };
//     }
//
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response =>
    //         response.json())
    //         .then((users) => this.setState(() => {
    //                     return {monsters: users}
    //                 },
    //                 () => {
    //                     // console.log(this.state);
    //                 }
    //             )
    //         );
    // }
//
//     onSearchChange = (event) => {
//         const searchField = event.target.value.toLocaleLowerCase();
//         this.setState(() => {
//             return {searchField};
//         });
//     };
//
//     render() {
//
//         const {monsters, searchField} = this.state;
//         const {onSearchChange} = this;
//
//         const filteredMonsters = monsters.filter((monster) => {
//             return monster.name.toLocaleLowerCase().includes(searchField);
//         });
//
//         return (
//             <div className="App">
//                 <h1 className='app-title'>Monsters Rolodex</h1>
//                 <SearchBox
//                     className='monsters-search-box'
//                     onChangeHandler={onSearchChange}
//                     placeholder='search monsters'/>
//                 <CardList monsters={filteredMonsters}/>
//             </div>
//         );
//     }
// }

export default App;
