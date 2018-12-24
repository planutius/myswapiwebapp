import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{
                     backgroundColor: 'darkgrey',
                     overflowY: 'scroll',
                     border: '6px solid black'
                    ,height: '700px'}}>
            {props.children}
        </div>
    );
}

export default Scroll;