import React from 'react';
import "./form.style.css";

const Forms = props => {
    return (
        <div className="container">
            <div>{props.error ? error():null}</div>
            <form onSubmit ={props.loadWeather}>
                <div className="row">
                    <div className="col-md-3">
                        <input type = "text" className = "form-control" name ="city"
                        placeholder ="Enter The City" autoComplete ="off"></input>
                    </div>
                    <div className="col-md-3">
                    <input type = "text" className = "form-control" name ="country" 
                    placeholder = "Enter The Country" autoComplete ="off"></input>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-warning">Get Weather Details</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

function error () {
    return (
        <div className="alert alert-danger mx-5" role = "alert">
            Please Provide City and Country
        </div>
    );
}

export default Forms;