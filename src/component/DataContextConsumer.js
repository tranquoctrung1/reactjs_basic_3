import React , {useContext } from 'react';

import Context from '../Context/Context';

export default function () {
    const {number, updateNumber} = useContext(Context)

        return (
            // <Context.Consumer>
            //    {({number, updateNumber}) => 
            //         <div>
            //             <div>{number}</div>
            //             <button onClick={updateNumber}>Update Number</button>
            //         </div>}
            // </Context.Consumer>
                <div>
                    <div>{number}</div>
                    <button onClick={updateNumber}>Update Number</button>
                </div>
                )
}