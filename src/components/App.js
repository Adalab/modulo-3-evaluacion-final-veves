import { useState, useEffect } from 'react';
import '../styles/core/reset.css'
import '../styles/App.css';
import api from '../services/fech'
import CharacterList from './characterList';
import Info from './card';
import Filter from './filter';
import { Route, Switch, useRouteMatch } from 'react-router-dom';



function App() {



  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');
  

  useEffect(() => {
    api.getCharacter().then((initialData) => {
      setData(initialData);
      console.log(initialData);
    });


  }, [searchName])
  const handleSearchName = (ev) => {
    ev.preventDefault();
    setSearchName(ev.currentTarget.value)
  }

  const filteredData = data
    .filter((character) =>
      character.name
        .toLocaleLowerCase()
        .includes(searchName.toLocaleLowerCase())
    )

  const routeData = useRouteMatch('/character/:id');
  const characterId = routeData !== null ? routeData.params.id : '';
  const selectedCharacter = data.find((character) => character.id === parseInt(characterId));
  console.log(characterId);
  
  return (
    <div classNameName="App">
      <header>
        <img alt="logo de Rick y Morty" src="./logo.jpg" />
      </header>
      <Switch>
        <Route path="/character/:id" >
          <Info character={selectedCharacter}/>
        </Route>
        <Route path="/" >
          <main>
            <form className="filter">
              <Filter
                searchName={searchName}
                handleSearchName={handleSearchName} />
            </form>
            <CharacterList data={filteredData} />
          </main>
        </Route>

      </Switch>


    </div>
  );
}

export default App;
