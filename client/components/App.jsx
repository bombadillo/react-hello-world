import React from 'react';

import styles from './app.css';
import List from './list/List.jsx';
require("!style-loader!css-loader!spectre.css/dist/spectre.min.css");

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            count: 5,
            items: ['Apples', 'Broccoli', 'Banana', 'Fish']
        }        
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div className={'container ' + styles.app}>
                <div className="columns">
                    <div className="column col-3 text-center centered">

                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Yo, {this.props.name}!</h4>
                            </div>
                            <div className="card-body">
                                <span className="badge" data-badge={this.state.count}>
                                    Count
                                </span>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary" type="button" onClick={this.incrementCount}>Increment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column col-3 text-center centered">
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        )
    }
}