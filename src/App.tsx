import React, { useState, useEffect, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { PokemonsContext } from "./contexts/pokemons.context";
import Pokemon from "./models/pokemon";

export interface User {
  name: string;
  id: number;
}
const App = () => {
  const [searchField, setSearchField] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const { pokemonsMap, loading } = useContext(PokemonsContext);

  useEffect(() => {
    setTotalPages(Math.floor(filteredPokemons.length / 20));
  }, [filteredPokemons]);

  useEffect(()=>{
    setCurrentIndex(0);
  },[totalPages])
  useEffect(() => {
    let newFilteredPokemons = pokemonsMap.filter((e: Pokemon) => {
      return e.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredPokemons(newFilteredPokemons);
  }, [searchField, pokemonsMap]);

  
  const onSearchChange = (event: any) => {
    console.log(event.target.value);
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentIndex < totalPages) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  console.log(filteredPokemons.slice(currentIndex*20,20));
  
  return (
    <div className="App">
      <h1 className="app-title">Pokemon</h1>

      <SearchBox
        onSearchHandler={onSearchChange}
        placeHolder={"Search pokemon"}
        className={"monsters-search-box"}
      />
      <div>
        <button className="pagination-button" onClick={handlePrevClick} disabled={(currentIndex===0)}>Previous</button>
        <label className="pagination">
          {currentIndex}/{totalPages}
        </label>
        <button className="pagination-button" onClick={handleNextClick} disabled={(currentIndex===totalPages)}>Next</button>
      </div>
      <br></br>
      <CardList pokemons={filteredPokemons.slice(currentIndex*20,currentIndex*20+20)} />
    </div>
  );
};
/*class App extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState(() => {
                        return {monsters: users}
                    },
                    );
            })
    }

    onSearchChange = (event:any) => {
        console.log("search")
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return {searchField}
        })
    }


    render() {
        console.log("render APP")
        const {monsters, searchField} = this.state;
        const {onSearchChange} = this;
        const filteredMonsters = monsters.filter((e: User) => {
            return e.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <h1 className='app-title'>Monsters rolodex</h1>
                <SearchBox
                    onSearchHandler={onSearchChange}
                    placeHolder={'Search monster'}
                    className={'monsters-search-box'}/>
                {/!*
                    filtredMonsters.map((e: { name: string, id: number }) => {
                        return <h1 key={e.id}>{e.name}</h1>
                    })
                *!/}
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }

}*/

export default App;
