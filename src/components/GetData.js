
//Usaremos este componente para cargar diferentes datos de SWAPI
import React from 'react';

const GetData = (url) => {
   
    fetch(url)
    .then(response => response.json())
    .then(results => {
        return results;
        });
  
}

export default GetData;