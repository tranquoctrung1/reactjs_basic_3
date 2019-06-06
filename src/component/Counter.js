import React, {Component} from 'react';


class Counter extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            count : 0
        }
    }


    componentDidMount () 
    {
        this.timerid = setInterval(() =>
        {
            this.setState(
                {
                    count: this.state.count + 1
                }
            )
        },1000)
    }

    componentWillUnmount()
    {
        clearInterval(this.timerid);
    }

    render()
    {
        return <div>{this.props.children(this.state)}</div>
    }
}

export default Counter;