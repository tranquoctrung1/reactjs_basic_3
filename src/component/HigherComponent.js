import React, {Component} from 'react';


function HigherComponent(WrappedComponent, opacity = 0.5)
{
    return class InHigherComponent extends Component {
        constructor(props)
        {
            super(props);

            this.state ={
                isHover: false
            }

            this.onMouseEnter = this.onMouseEnter.bind(this);
            this.onMouseLeave = this.onMouseLeave.bind(this);
        };

        onMouseEnter()
        {
            this.setState({
                isHover: true
            })
        }

        onMouseLeave()
        {
            this.setState({
                isHover: false
            })
        }

        render()
        {
            const {isHover} =this.state;
            return (
                <div className="HigherComponent" style={{opacity: isHover ? opacity: 1}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                    {/* Trong này dùng toán tử spread để trải ra hết tất cả các props mà chúng ta nhận từ component ở ngoài dòng code ở dưới miêu tả các dùng*/}
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }   
}

export default HigherComponent;