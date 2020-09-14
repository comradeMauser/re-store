import React, {Component} from 'react';
import ErrorIndicator from "./Error-indicator";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        if (this.state.error) {
            return <ErrorIndicator/>
        }
        return this.props.children
    }
}

export default ErrorBoundary;