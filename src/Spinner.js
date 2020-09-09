import React from 'react';
import Loader from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className="container">
            ...loading...
            <Loader type="Oval" color="red"/>
        </div>
    );
};

export default Spinner;