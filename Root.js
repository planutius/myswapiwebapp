import React from 'react';

const Root = () => {
    const attributes = fetch('https://swapi.co/api/')
    .then(response => response.json());

    return (
        <div className="App-root">
        {
           return (attributes.map(props, i) => {
               return <button>props</button>;
            });
        }            
        </div>
    );
}
    


export default Root;
