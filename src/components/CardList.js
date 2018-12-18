import React from 'react';
import Card from './Card';


const CardList = ({ datos }) => { 

  if (!datos.results){
    return (
      <div>
        <h1>Oops! No Cards</h1>
      </div>
    );

  } else {
    var x;  
    var resultsArray = [];
      for (x in datos.results) {
        resultsArray.push(datos.results[x]);
      }
  
    return (
      <div className="flex-auto">
          {
            resultsArray.map((data,i) => {
              return (
                  <Card
                      key={i}
                      id={i} 
                      name={data.name}
                  />
                );
            })
          }
      </div>
    );
  }
       
}
     
export default CardList;