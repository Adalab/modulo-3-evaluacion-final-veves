import '../styles/components/page.css'
function Info(props) {

    console.log(props)
    return (
        <article className="new-page">
            <div className="complete">
                <div className="info" id={props.id}>
                    <p>{props.character.name}</p>
                    <p>{props.character.status}</p>
                    <p>{props.character.species}</p>
                    <p>{props.character.gender}</p>
                    <p>{props.character.origin}</p>
                </div>
                <img src={props.character.image} alt={props.character.name} className="img" />
            </div>
        </article>
    )


}
export default Info;