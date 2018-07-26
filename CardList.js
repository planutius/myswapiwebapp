import React from 'react';
import Card from './Card';


const CardList = ({datos}) => {
    const cardArray = datos.map((item, i) => {
        return (<Card
                    id={i} 
                    name={item[i].name}
                    height={item[i].height}
                    gender={item[i].gender}
                />
        );
    })
    console.log(cardArray);
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