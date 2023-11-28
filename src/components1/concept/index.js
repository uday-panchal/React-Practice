import React from "react";
// import "./Assigment3.css"

const Concept = ({image,title,description}) => {
    return (
        <li className="concepts">
            <img src={image} className="boxIcon" alt={title}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </li>
    )
}
export default Concept;