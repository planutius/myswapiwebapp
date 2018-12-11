import React from 'react';
import Card from './Card';


const CardList = (props) => { 

    var resultsArray = [];
    props.results.map((item, x) => {
        resultsArray[x].push(item);
    });
 
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