import { useQuery } from "react-query";
import * as React from "react";
import CardInfoPlanets from "./CardInfoPlanets";

async function getInfoFromApi(url) {
  const info = await fetch(url);
  const infoJson = info.json();
  return infoJson;
}

function CardInfo(props) {
  const { name, homeworldUrl, filmsUrls } = props;
  const [homeWorld, setHomeworld] = React.useState("");

  const { isLoading, error, data } = useQuery(["homeWorld", homeworldUrl], () =>
    getInfoFromApi(homeworldUrl)
  );
  //console.log(data);

  React.useEffect(() => {
    if (data) {
      setHomeworld(data.name);
    }
  }, [data]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>There has been an error...</div>;
  //console.log(filmsUrls);
  return (
    <div>
      <div>
        {name} - {homeWorld}
      </div>
      <div>
          Films:
          {filmsUrls.map(url => {
              return <CardInfoPlanets filmUrl={url} />})}
        
      </div>
    </div>
  );
}

export default CardInfo;
