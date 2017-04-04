import React from 'react';

export default class List extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            items: this.props.items
        }      
    }

    removeFromList(itemToRemove) {
        this.setState({
            items: this.state.items.filter((item) => { 
                return item !== itemToRemove;
            })
        }, this.onStateUpdated)
    }

    render() {
        return (
            <div>
                {
                    this.state.items.map((item) => {
                        return (
                            <label className="chip" key={item}>
                            <img src="/img/avatar-1.png" className="avatar avatar-sm" />
                            {item}
                            <button className="btn btn-clear" onClick={() => this.removeFromList(item)}></button>
                            </label>                        
                        )
                    })
                }
            </div>            
        )
    }    
}