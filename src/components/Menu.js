import React from 'react'

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      loaded: false,
      items: []
    }
  }
  //Descargo las propiedades principales de SWAPI
  componentDidMount(){
    
    fetch('https://swapi.co/api/')
    .then(response => response.json())
    .then(results => {
          this.setState({
            loaded: true,
            items: results                                                 
        });
   },
   error => {
       this.setState({
           loaded: true,
           error
       });
   })
  }

  //Creo el navbar con los nombres y url de las propiedades principales de SWAPI
  render() {
      const { error, loaded, items} = this.state;
      
      if (error) {
       return <div>Error: {error.message}</div>;
     } else if (!loaded) {
       return <div>Loading buttons . . . </div>;
     } else {
       return (
         <div className="App-menu">
           {  
               Object.entries(items).map(([key, value]) => {
                  return (<button className=" f6 grow br-pill ph3 pv2 mb2 mt2 mh1 dib black button-menu" 
                  key={key} value={value} onClick={this.props.menuClick}> { key } </button>);
               })
           }
         </div>
       );
      }
  }
   
}

export default Menu;