import React from "react";
import keyKeyConceptsImage from '../../assects/key-concepts.png';

const Header = () => {
    return(
        <header>
            <img src={keyKeyConceptsImage} className="starIcon" alt="Medal Badge with a star"/>
            <h1>Key React Concepts</h1>
            <p>Selected Key React concepts you should know about</p>
        </header>
    )
}
export default Header