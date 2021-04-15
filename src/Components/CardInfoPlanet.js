import * as React from "react";
import { useQuery } from "react-query";

async function getFilms(url) {
  const info = await fetch(url);
  const infoJson = info.json();
  return infoJson;
}
function CardInfoPlanet(props) {
  const { planetUrl } = props;

  const [planet, setPlanet] = React.useState("");

  const { isLoading, error, data } = useQuery(["planet", planetUrl], () =>
    getFilms(planetUrl)
  );

  React.useEffect(() => {
    if (data) {
      setPlanet(data);
    }
  }, [data]);
  if (isLoading) return <>Loading...</>;
  if (error) return <>There has been an error...</>;
  return <>{planet.name}</>;
}

export default CardInfoPlanet;
