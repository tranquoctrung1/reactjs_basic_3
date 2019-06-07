import React,{Component} from 'react'; 
import './ImageComponent.sass';

class ImageComponent extends Component {
    render() 
    {
        const {url} = this.props;
        return (
            <img className="mainimg" src={url} alt="img nature">
            </img>  
        )
    }
}


export default ImageComponent;