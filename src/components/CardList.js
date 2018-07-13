import React from 'react';
import Card from './Card';


const CardList = ({ datos }) => {
    
    return (
        <div>
            {
               Object.entries(datos).map((data,i) => {
                    return ( 
                        <Card
                            key={i} 
                            name={datos[i].name} 
                            height={datos[i].height}
                            gender= {datos[i].gender}

                        />
                    );
                })
            }
        </div>
    );
}

    
export default CardList;