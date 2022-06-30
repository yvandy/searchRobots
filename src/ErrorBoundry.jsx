import React, { Component } from "react";

class ErrorBoundary extends Component {

    //useful to catch error in production mode
    
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true})
    }

    render(){
        if(this.state.hasError){
            return <h1> OOOPS . This is not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;