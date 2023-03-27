import React from 'react';
import { useParams } from 'react-router-dom';
import "./Css/Error.css";

const Error = () => {

    const {id} = useParams();

    return (
        <div className='ErrorContainer'>
            <h1>ERROR 404 :(</h1>
        </div>
    );
}

export default Error;
