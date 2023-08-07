import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";
import "./App.css";

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState(""); // [value, setValue]
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
      setMonsters(users)
    }
    fetchUsers()
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="title-name"> JJK Rolodex </h1>
      <SearchBox
        className="search-box"
        placeholder="Search"
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters : [],
//       searchField : ""
//     }
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.json())
//     .then((users) =>
//     this.setState(
//       () => {
//         return {monsters:users}
//       })
//     )
// }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {searchField};
//     })
//   }

//   render() {
//     const {monsters,searchField} = this.state;
//     const {onSearchChange} = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })

//     return (
//   <div className="App">
//   <h1 className='title-name'> JJK Rolodex </h1>
//   <SearchBox className="search-box" placeholder="Search" onChangeHandler={onSearchChange} />
// <CardList monsters={filteredMonsters} />
// </div>
//     );
//   }
// }

export default App;
