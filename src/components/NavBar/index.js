import React from 'react';

import './styles.css';


/**
 * 
 * @param {*} props
 * @param {String} brandSrc - Link da imagem do brand 
 * @param {String} brandSrc - Link da imagem do brand 
 *   
 */

function Navbar(props){
    return(
        <header className="navbar">
            <nav className="brand">
                <img src={props.brandSrc} alt={props.brandAlt}/>
                <h1 className="brandTitle" >Malditos Goblins</h1>
            </nav>
        </header>
    )
}

export default Navbar;