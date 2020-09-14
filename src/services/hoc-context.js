import React from 'react';
import {ServiceConsumer} from "./service-context";

const HocContext = () => (Wrapper) => {
    return (props) => (
        <ServiceConsumer>
            {
                (booksService) => {
                    return <Wrapper {...props}
                                    booksService={booksService}/>
                }
            }
        </ServiceConsumer>
    );
};

export default HocContext;