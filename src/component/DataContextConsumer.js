import React , { Component } from 'react';

import Context from '../Context/Context';

export default class extends Component {
    render()
    {
        return (
            <Context.Consumer>
               {({number, updateNumber}) => 
                    <div>
                        <div>{number}</div>
                        <button onClick={updateNumber}>Update Number</button>
                    </div>}
            </Context.Consumer>
        )
    }
}