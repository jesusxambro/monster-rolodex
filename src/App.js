import { useState} from "react";

import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from './components/search-box/search-box.components';

const App = () => {
    console.log('render');//log when it renders and precedence
    const [searchField, setSearchField] = useState('');
    console.log(searchField);//string in search
    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
        }

    return (
        <div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox
                className='monsters-search-box'
                onChangeHandler={onSearchChange}
                placeholder='search monsters'/>

            {/*<CardList monsters={filteredMonsters}/>*/}
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
//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users').then(response =>
//             response.json())
//             .then((users) => this.setState(() => {
//                         return {monsters: users}
//                     },
//                     () => {
//                         // console.log(this.state);
//                     }
//                 )
//             );
//     }
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
