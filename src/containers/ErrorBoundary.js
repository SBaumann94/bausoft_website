import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.lang = props.lang;
        this.state = {
            hasError: false,
            errorText: ""
        }
    }
    componentDidCatch(error, info) {
        this.setState({ hasError: true, errorText: error.toString() })
    }
    render() {
        if (this.state.hasError) {
            if (this.lang === 'hun') {
                return <span><h2>Hiba történt a megjelenítésnél, elnézését kérjük, dolgozunk a megoldáson.</h2><p>{this.state.errorText}</p></span>
            } else if (this.lang === 'eng') {
                return <span><h2>There was an error while rendering, we are sorry, we are working on the solution.</h2><p>{this.state.errorText}</p></span>
            }
        }
        else { return this.props.children }
    }
}

export default ErrorBoundary;