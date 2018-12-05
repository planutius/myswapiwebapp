import React from 'react';
import Card from './Card';


const CardList = ({datos}) => {

    var items = datos.results;

    const cardArray = items.map((data, i) => {
        return (
            <Card
                id={i} 
                name={data[i].name}
                height={data[i].height}
                gender={data[i].gender}
            />
        );
    });
        
    if (cardArray.length === 0) {
        return <div>Cargando datos...</div>;
    } else {
        return (
            <div>
                {
                 cardArray
                }
            </div>
        );
    }  
}
     
export default CardList;