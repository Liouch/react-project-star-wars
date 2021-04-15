import * as React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

async function getFilmInfo(url) {
  const info = await fetch(url);
  const infoJson = await info.json();
  return infoJson;
}
function CardInfoFilmsList(props) {
  const { filmUrl } = props;
  const [film, setFilm] = React.useState("");
  console.log(filmUrl);
  const { isLoading, error, data } = useQuery(["filmInfo", filmUrl], () =>
    getFilmInfo(filmUrl)
  );
  console.log(data);
  React.useEffect(() => {
    if (data) {
      setFilm(data);
    }
  }, [data]);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error...</>;
  return (
  <li><Link to={`/film/${filmUrl.split("/")[5]}`}>{film.title}</Link></li>
  );
}

export default CardInfoFilmsList;
