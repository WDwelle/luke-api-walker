import React, {useState,} from 'react';
import {useHistory} from "react-router-dom";


const Form = (props) => {
    const [topic, setTopic] = useState();
    const [id, setId] = useState();
    const history = useHistory();
    
    const handleFetch = (e) => {
        e.preventDefault();
        history.push(`/${topic}/${id}`);
    };
    
    return(
        <div>
            <form onSubmit={handleFetch}>
                <label>Search for:</label>
                    <select onChange={ (e) => setTopic(e.target.value)} >
                        <option value="">Select Topic...</option>
                        <option value="films">Films</option>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="species">Species</option>
                        <option value="starships">Starships</option>
                        <option value="vehicles">Vehicles</option>
                    </select>
                    <select onChange={ (e) => setId(e.target.value)}>
                        <option value="">ID</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                <input type="submit" value="Search" />
            </form>

        </div>

    )};

export default Form;