import React from 'react';
import "./weather.style.css";

const Weather = (props) => {
    console.log(props.weatherIcon);
    return (
        <div className="container">
           <div className="cards">
               <h1>{props.city},{props.country}</h1>
               <h5 className = "py-4">
                   <i className = {`wi ${props.icon} display-1`}></i>
               </h5>
               <h1 className = "py-2">
                   {props.temp}&deg;
               </h1>
               {/* Minimum And maximum Temparature*/ }
               {minMaxTemp(props.temp_min,props.temp_max)}

               <h4 className = "py-3">{props.description}</h4>
           </div>
        </div>
    )
}

function minMaxTemp (min,max) {
    return (
        <h3>
            <span className="px-4">
                {min}&deg;
            </span>
            <span className="px-4">
                {max}&deg;
            </span>
        </h3>
    );
}

export default Weather;