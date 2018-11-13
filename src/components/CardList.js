import React from 'react';
import Card from './Card';


const CardList = ({datos}) => {
    var items = datos;

    const cardArray = items.map((data, index) => {
        return (
                <Card
                    id={index} 
                    name={data.name}
                   /* height={value[key].height}
                    gender={value[key].gender}*/
                />
        );
     });
  
    if (cardArray.lenght === 0) {
        return <div>Cargando datos...</div>;
      } else {
         
        return (
            
            <div>
              <p>What tha fuck!</p>
                {
                   cardArray
                }
            </div>
        );
    }  
}
    
export default CardList;