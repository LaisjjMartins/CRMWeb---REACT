import React from "react";
import NotFound from "../../Images/notfound.png";
import "./styles.css"

export function ErrorNotFound(){
    return(
    <div>
        <img className="notfound"  src={NotFound} />
    </div>
    )
}