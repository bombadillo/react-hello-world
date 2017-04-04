import React from 'react';

import styles from './app.css';
require("!style-loader!css-loader!spectre.css/dist/spectre.min.css");

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 5 }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column col-12 text-center">
                        <h2>Yo, {this.props.name}!</h2>
                            <h3>                            
                                <span className="badge" data-badge={this.state.count}>
                                    Count
                                </span>                        
                            </h3>
                        <button className="btn btn-primary" type="button" onClick={this.incrementCount}>Increment</button>
                    </div>
                </div>                
            </div>
        )
    }
}