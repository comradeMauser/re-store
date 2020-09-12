import React from 'react';

const ErrorIndicator = () => {
    return (
        <div className="alert alert-dismissible alert-warning">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h4 className="alert-heading">Warning!</h4>
            <p className="mb-0">you broke it, congratulations</p>
        </div>
    );
};

export default ErrorIndicator;