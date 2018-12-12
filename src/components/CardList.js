import React from 'react';
import Card from './Card';


const CardList = ({ datos }) => { 

  var x;  
  var resultsArray = [];
    for (x in datos.results) {
      resultsArray.push(datos.results[x]);
    }
 
  return (
    <div>
        {
          resultsArray.map((data,i) => {
            return (
                <Card
                    id={i} 
                    name={data.name}
                    height={data.height}
                    gender={data.gender} 
                />
              );
          })
        }
    </div>
  );
       
}
     
export default CardList;