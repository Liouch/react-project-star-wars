import * as React from 'react';
import { useQuery } from 'react-query';
import Card from './Card';


const getCharacters = async () => {
    const characterList = await fetch(
        "https://swapi.dev/api/people/"
    );
    const characterListJson = characterList.json();
    return characterListJson;
}

function Home() {
    const { isLoading, error, data } = useQuery(
        "CharacterList",
        getCharacters
    );
    //console.log(data);
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>There has been an error...</div>
    return (
        <React.Fragment>
            {data && <Card characterList={data}/>}
            <p>I'm the change! </p>
        </React.Fragment>
    )
}

export default Home
