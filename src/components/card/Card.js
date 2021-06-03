import React from "react";
import './card.style.css';


export const Card =({monkey}) => {

  return  (
        <div className={"card-container"}>
            <img alt="monkey" src={`https://github.com/Carlos-Blandino/monkey-rolodex/blob/main/src/components/card/images/${monkey.id}.jpg?raw=true`} width={"200px"}/>
            <h1>
                {monkey.name}
            </h1>
        </div>
    )
}


