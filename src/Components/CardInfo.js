import { useQuery } from "react-query";
import * as React from "react";
import { BrowserRouter as Router, useParams, Link } from "react-router-dom";


async function getInfoFromApi(url) {
  const info = await fetch(url);
  const infoJson = info.json();
  return infoJson;
}

function CardInfo(props) {
  const { name, homeworldUrl, filmsUrls, url } = props;
  const [homeWorld, setHomeworld] = React.useState("");

  const { isLoading, error, data } = useQuery(["homeWorld", homeworldUrl], () =>
    getInfoFromApi(homeworldUrl)
  );

  React.useEffect(() => {
    if (data) {
      setHomeworld(data.name);
    }
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>There has been an error...</div>;
  
  return (
    <>
      <Link to={`/people/${url.split("/")[5]}`}>
        <div>
          {name} - {homeWorld}
        </div>
      </Link>
    </>
  );
}

export default CardInfo;
