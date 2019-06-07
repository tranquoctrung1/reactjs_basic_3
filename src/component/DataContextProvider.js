import React, { Component } from 'react';

import Context from '../Context/Context';

export default class extends Component {
    constructor(props)
    {
        super(props);

        this.state= {
            number: 0,
        }

        this.updateNumber = this.updateNumber.bind(this);
    }

    updateNumber()
    {
        this.setState({
            number: this.state.number +1 
        })
    }

    render()
    {
        const {children} = this.props;
        return (
            <Context.Provider value={{
                number: this.state.number,
                updateNumber: this.updateNumber
            }}>
                {children}
            </Context.Provider>
        )
    }
}