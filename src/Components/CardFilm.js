import * as React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';

async function getFilmInfo(url) {
    const info = await fetch(url);
    const infoJson = await info.json();
    return infoJson;
  }
function CardFilm() {
    let { id } = useParams();
    const [filmInfo, setFilmInfo] = React.useState({})
    const [filmYear, setFilmYear] = React.useState()
   
    const filmInfoUrl = `https://swapi.dev/api/films/${id}`;

    const { isLoading, error, data } = useQuery(
        ["filmInfo", filmInfoUrl], 
        () => getFilmInfo(filmInfoUrl)
    )
    //console.log(filmInfoUrl);
    React.useEffect(() => {
        if(data){
            setFilmInfo(data)
            setFilmYear(data.release_date)
        }
    }, [data])
    console.log(filmInfo);
    function getYear(){
        //const releasedYear = filmInfo.release_date?.split("-")[0]
        //const currentYEar = Date.now().getFullYear();
        if (filmYear) {
            console.log(filmYear);
            const releasedYear = filmYear.split("-")[0];
            const releasedMonth = filmYear.split("-")[1];
            const releasedDay = filmYear.split("-")[2]
            const currentDate = new Date();
            const currentMonth = currentDate.getMonth()+1;
            const currentDay = currentDate.getDate();

            const years = currentDate.getFullYear() - releasedYear;
            
            // If the month is higher or equal to the released month and the day is higher or equal to the released day, then we do not have to modify the years difference
            if(currentMonth >= (parseInt(releasedMonth)) && (currentDay >= releasedDay) ){
                console.log("Released "+(years)+ " years ago");
                return years;
            }else{
                console.log("Released "+(years-1)+ " years ago")
                return years-1;
            }
            

        }
        //console.log(currentYEar)
    }
    return (
        <div>
            {filmInfo.title} - Released: {getYear()} ago
        </div>
    )
}

export default CardFilm
