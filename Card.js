import React from 'react';

const Card = (props) => {
    const {id, name, height, gender} = props;

    return (
        <div id={id} className='tc mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
            <img src={`https://robohash.org/${name}`} alt='Foto' />
            <div>
                <h1>{name}</h1>
                <p>Altura: {height}</p>
                <p>Género: {gender}</p>
            </div>
        </div>
    );
}

export default Card;