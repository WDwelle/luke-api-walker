import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";


const Display = (props) => {
//===UseState is set===
    const [starWarsData, setStarWarsData] = useState({});
    const [isSubmitted, setIssubmitted] = useState(false);
    const {topic, id} = useParams();
//===API call===
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${topic}/${id}`)
        .then(response=>{setStarWarsData(response.data)})
        .then(console.log(starWarsData))
        .catch(() => {console.log("Bad request")});
    }, [id]);
//===Display based off given variables (topic and id===)
    const display = () => {
        if (topic === "films"){
            return(
                <div>
                    <h1>{starWarsData.title}</h1>
                    <h3>Director: {starWarsData.director}</h3>
                    <h3>Created: {starWarsData.created}</h3>
                    <h3>Episode: {starWarsData.episode_id}</h3>
                </div>
            ) 
        }
        else if(topic === "people") {
            return(
                <div>
                    <h1>{starWarsData.name}</h1>
                    <h3>Birth Year: {starWarsData.birth_year}</h3>
                    <h3>Height: {starWarsData.height}</h3>
                    <h3>Color: {starWarsData.skin_color}</h3>
                </div>
            ) 
        }
        else if(topic === "planets") {
            return(
                <div>
                    <h1>{starWarsData.name}</h1>
                    <h3>Climate: {starWarsData.climate}</h3>
                    <h3>Poulation: {starWarsData.population}</h3>
                    <h3>Terrain: {starWarsData.terrain}</h3>
                </div>
            ) 
        }
        else if(topic === "starships") {
            return(
                <div>
                    <h1>{starWarsData.name}</h1>
                    <h3>Passengers: {starWarsData.passengers}</h3>
                    <h3>Manufactuer: {starWarsData.manufacturer}</h3>
                    <h3>Cost in Credits: {starWarsData.cost_in_credits}</h3>
                </div>
            )   
        }
        else{ 
            console.log("bad option")
        }
    }


    return(
        <div>
            {display()}

        </div>
    );

}
export default Display;