import * as React from "react";
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
  }, []);

  console.log(characters);

  return (
    <div>
      {characters?.map((character) => {
        return <CardInfo name={character.name} homeworldUrl={character.homeworld} filmsUrls={character.films} key={character.url}/>;
      })}
    </div>
  );
}

export default Card;
