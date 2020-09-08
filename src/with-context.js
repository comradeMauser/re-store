import React from 'react';
import {Consumer} from "./context"

const WithContext = () => (Wrapper) => {
    return (props) => (
        <Consumer>
            {
                (bookService) => {
                    return <Wrapper {...props}
                                    service={bookService}/>
                }
            }
        </Consumer>
    );
};

export default WithContext;