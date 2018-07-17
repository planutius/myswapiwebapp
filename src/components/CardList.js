import React from 'react';
import Card from './Card';


const CardList = ({ datos }) => {
    if (!datos) {
        return <div>Error</div>;
      } else {
        return (
            
            <div><p>What tha fuck!</p>
                {
                Object.entries(datos).map((data,i) => {
                        return ( 
                            <Card
                                key={i} 
                                name={data[i].name} 
                                height={data[i].height}
                                gender= {data[i].gender}

                            />
                        );
                    })
                }
            </div>
        );
    }  
}

    
export default CardList;