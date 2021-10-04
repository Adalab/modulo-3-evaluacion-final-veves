
function getCharacter() {
    return fetch("//raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json")
        .then(response => response.json())
        .then(json => {
            return json.results.map((character) => {
                return {
                    id: character.id.parseInt,
                    name: character.name,
                    status: character.status,
                    species: character.species,
                    gender: character.gender,
                    origin: character.origin.name,
                    image: character.image
                };

            });
        })
    
}


const objectToExport = {
    getCharacter: getCharacter
};
export default objectToExport;