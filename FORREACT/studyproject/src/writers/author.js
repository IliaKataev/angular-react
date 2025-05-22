import React from "react";
import PropTypes from "prop-types";

export default function Author({
                                   picture = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Plato_Silanion_Musei_Capitolini_MC1377.jpg/960px-Plato_Silanion_Musei_Capitolini_MC1377.jpg",
                                   name = "Plato",
                                   quote = "One Piece"
                               }) {
    return (
        <div>
            <img src={picture} alt="portrait"/>
            <h2>{name}</h2>
            <h2>{quote}</h2>
        </div>
    );
}


Author.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired
}