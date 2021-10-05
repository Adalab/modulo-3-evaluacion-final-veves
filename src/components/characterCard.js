
import '../styles/App.css';
import'../styles/core/reset.css'

function CharacterCard(props) {
        return(
            <>
            <img className="character-image" alt="imagen del personaje" src={props.characterData.image}></img>
            <p className="text">{props.characterData.name}</p>
            <p className="text">{props.characterData.species}</p>
            </>
       )
        
       
}
export default CharacterCard;