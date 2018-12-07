import React from 'react';
import Card from './Card';


const CardList = ({ datos }) => { 

    var resultsArray = [];
    for (var i in datos[0].results.length)
        resultsArray.push([i, datos[0].results[i]]);
 
  return (
    <div>
        {
          resultsArray.map((data, i) => {
              return (
                <Card
                    id={i} 
                    name={data[i].name}
                    height={data[i].height}
                    gender={data[i].gender}
                />
              );
          })
        }
    </div>
  );
       
}
     
export default CardList;