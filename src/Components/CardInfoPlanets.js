import * as React from "react";
import { useQuery } from "react-query";

async function getFilms(url) {
    const info = await fetch(url);
    const infoJson = info.json();
    return infoJson;
  }
function CardInfoPlanets(props) {
  const { filmUrl } = props;

  const [film, setFilm] = React.useState("");
  //console.log(filmUrl);

  //console.log(props);

  const { isLoading, error, data } = useQuery(["films", filmUrl], () => 
    getFilms(filmUrl)
  );
  //console.log(data);

  React.useEffect(() => {
    if (data) {
      setFilm(data);
      console.log(data)
    }
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>There has been an error...</div>;
  return <div>{film?.title} - release date {film?.release_date}</div>;
}

export default CardInfoPlanets;
