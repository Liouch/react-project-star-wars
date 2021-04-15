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
  const { characterList } = props;

  const [characters, setCharacters] = React.useState([]);

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
          <CardInfo
            name={character.name}
            homeworldUrl={character.homeworld}
            filmsUrls={character.films}
            url={character.url}
            key={character.url}
          />
        );
      })}
    </div>
  );
}

export default Card;
