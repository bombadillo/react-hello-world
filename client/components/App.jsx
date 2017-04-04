import React from 'react';

// import styles from './app.css';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Yo, {this.props.name}!</h2>
            </div>
        )
    }
}