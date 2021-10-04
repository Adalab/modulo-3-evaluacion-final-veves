import { useState, useEffect } from 'react';
import '../styles/App.css';
import api from '../services/fech'
import CharacterList from './characterList';



function App() {



  const [data, setData] = useState([]);
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    api.getCharacter().then((initialData) => {
      setData(initialData);
    });

  }, [])
  return (
    <div classNameName="App">
      <header>
        <img alt="logo de Rick y Morty" src="./logo.jpg" />
      </header>
      <main>
        <form className="filter">
          <input type="text" className="search" />
        </form>
        <CharacterList data={data} />
      </main>

    </div>
  );
}

export default App;
