import * as React from "react";
import { useParams } from "react-router";
import { useQuery } from "react-query";
import CardInfoPlanet from "./CardInfoPlanet";
import CardInfoFilms from "./CardInfoFilms";

async function getCharacterInfo(url) {
  const info = await fetch(url);
  const infoJson = info.json();
  return infoJson;
}

function CardPersonalInfo(props) {
  let { people, id } = useParams();
  const [characterInfo, setCharacterInfo] = React.useState({});
  const [films, setFilms] = React.useState([]);
  

  const personalInfoUrl = `https://swapi.dev/api/${people}/${id}`;

  const { isLoading, error, data } = useQuery(
    ["CharacterInfo", personalInfoUrl],
    () => getCharacterInfo(personalInfoUrl)
  );
  React.useEffect(() => {
    if (data) {
      setCharacterInfo(data);
      setFilms(data.films)
    }
  }, [data]);
  //console.log(films)
  
  return (
    <div>
      <p>Id: {id}</p>
      <p>Name: {characterInfo.name}</p>
      <p>HomeWorld: <CardInfoPlanet planetUrl={characterInfo.homeworld}  /></p>
      <p>Films:  </p>
      <ol>
        {films?.map(film => {return <CardInfoFilms filmUrl={film} key={film}/>})}
      </ol>
      
    </div>
  );
}

export default CardPersonalInfo;
