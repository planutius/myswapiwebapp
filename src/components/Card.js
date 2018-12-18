import React from 'react';

const Card = (props) => {
    const {name} = props;

    return (
        <div className='tc bg-light-gray dib br3 ma2 grow bw1 shadow-5'>
            <img src={`https://robohash.org/set_set2/${name}?size=200x200`} alt='Foto' />
            <h2>{name}</h2>
        </div>
    );
}

export default Card;