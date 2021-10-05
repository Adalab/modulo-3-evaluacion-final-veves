import CharacterCard from "./characterCard";
import '../styles/core/reset.css'
import '../styles/App.css';
import { Link } from "react-router-dom";

function CharacterList(props) {
    
    const html = props.data.map((character) =>
        <div className="card" key={character.id} id={character.id}>
            <Link to={`./character/${character.id}`}>
                <CharacterCard characterData={character} />
            </Link>
        </div>
    );
    return (
        <section className="cards">

            {html}

        </section>
    )
}
export default CharacterList;