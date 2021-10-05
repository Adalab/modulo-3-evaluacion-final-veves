import { useState, useEffect } from 'react';
import '../styles/App.css';
import api from '../services/fech'
import CharacterList from './characterList';
import Filter from './filter';



function App() {



  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    api.getCharacter().then((initialData) => {
      setData(initialData);
      console.log(initialData);
    });


  }, [])
  const handleSearchName= (ev)=> {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value)}

    const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )
  return (
    <div classNameName="App">
      <header>
        <img alt="logo de Rick y Morty" src="./logo.jpg" />
      </header>
      <main>
        <form className="filter">
          <Filter 
              searchName={searchName}
              handleSearchName={handleSearchName}/>
        </form>
        <CharacterList data={filteredData} />
      </main>

    </div>
  );
}

export default App;
