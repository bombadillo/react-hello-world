import React from 'react';

import styles from './app.css';
require("!style-loader!css-loader!spectre.css/dist/spectre.min.css");

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="columns">
                    <div className="column col-12 text-center">
                        <h2>Yo, {this.props.name}!</h2>
                    </div>
                </div>                
            </div>
        )
    }
}