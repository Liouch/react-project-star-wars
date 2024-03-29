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
            <p>I'm the change to merge! </p>
            <p>This is a change ahead of the branch to try the merge</p>
            
            <p>I'm the line from main meant for rebase</p>
            <p>Line meant for the rebase</p>
        </React.Fragment>
    )
}

export default Home
