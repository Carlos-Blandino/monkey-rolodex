import React from "react";
import './card.style.css';


export const Card =({monkey}) => {

  return  (
        <div className={"card-container"}>
            <img alt="monkey" src={""} width={"180px"}/>
            <h1>
                {monkey.name}
            </h1>
        </div>
    )
}


