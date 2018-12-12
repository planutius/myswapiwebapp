import React from 'react';

const Card = (props) => {
    const {name, height, gender} = props;

    return (
        <div className='tc bg-light-gray dib br3 ma2 grow bw1 shadow-5'>
            <img src={`https://robohash.org/${name}`} alt='Foto' />
            <h1>{name}</h1>
            <p>Altura: {height}</p>
            <p>Género: {gender}</p>

        </div>
    );
}

export default Card;