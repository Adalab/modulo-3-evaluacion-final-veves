
import '../styles/App.css';

function CharacterCard(props) {
    console.log(props);  
        return(
            <>
            <img className="character-image" alt="imagen del personaje" src={props.characterData.image}></img>
            <p className="text">{props.characterData.name}</p>
            <p className="text">{props.characterData.species}</p>
            </>
       )
        
       
}
export default CharacterCard;