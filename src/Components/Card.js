import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  Switch,
  useParams,
} from "react-router-dom";
import CardInfo from "./CardInfo";

function Card(props) {
  //const { count, next, previous, results } = props?.data
  const { characterList } = props;

  const [characters, setCharacters] = React.useState([]);
  //console.log(characterList);
  
  

  React.useEffect(() => {
    if (characterList) {
      setCharacters(characterList.results);
    }
  }, [characterList]);

  //console.log(characters);

  return (
    <div>
      {characters?.map((character) => {
        return (
          <Link
            to={`/people/${character.url.split("/")[5]}`}
            key={character.url}
          >
            <CardInfo
              name={character.name}
              homeworldUrl={character.homeworld}
              filmsUrls={character.films}
              key={character.url}
            />
            {/* <div>{character.name}</div> */}
          </Link>
        );
      })}
    </div>
  );
}

export default Card;
