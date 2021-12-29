import React from "react";
import GM from './images/GM.png'


const Card = props => {
    return(
      <div className="card text-center">
          <div className="overflow">
              <img src={GM} alt="Mechanic Maker" />
          </div>
          <div className="card-body text-dark">
             <h4 className="card-title">Mechanic Maker</h4>
             <p className="card-text text-secondary">
                 ABOUT WILL COME HERE
            </p>
            <a href="#" className="btn btn-outline-success">GO to project</a>
          </div>
      </div>   
    );
}

export default Card;