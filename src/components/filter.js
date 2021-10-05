
function Filter(props) {
        return (
          <>
            <label htmlFor="search" className="form__label">
              Nombre:
            </label>
            <input type="text"
            id="search" 
            className="search" 
            placeholder="Nombre del personaje" 
            value={props.searchName}
            onChange={props.handleSearchName}
            />
            
          </>
        );
      }
export default Filter;