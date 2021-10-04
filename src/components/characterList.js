import CharacterCard from "./characterCard";
import '../styles/App.css';

function CharacterList(props) {
    const html = props.data.map((character) =>
    <div className="card" key={props.id}>
        <CharacterCard characterData={character}/>
        </div>
    );
    return (
        <section className="cards">
            
           {html}
           
        </section>
    )
}
export default CharacterList;