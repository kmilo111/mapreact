import React from 'react';
import SolicitudForm from './SolicitudForm.js';
import axios from 'axios';

const Home = () =>{

    let distancia;

    const funcionForma = (datos)=>{
    
    let url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins='+datos.dir_1+'&destinations='+datos.dir_2+'&key=AIzaSyDFyXgyUI-ASmrGyZl27SbvPp_pVRD0bOQ';

    fetch(url).then(response => response.json())
       .then(result =>{

           console.log('success:', result.rows)
           result.rows.forEach(element => {
                console.log(element);
                element.elements.forEach(element => {
                    console.log(element.distance.text);
                    distancia = element.distance.text;
                }); 
            });
            
        })
       .catch(error => console.log('error:', error));
    }

    return(
        <div>
            <h2>Home</h2>
            <SolicitudForm onSubmit={funcionForma} />
        </div>
    )
}

export default Home;

