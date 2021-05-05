import React from "react";
import Routes from "./Routes";

import NavBar from "./components/NavBar";

import './global.css';
import brand from './assets/brand.png';

function App(props){

    return( 
      <>
        <NavBar brandSrc={brand} brandAlt="Malditos Goblins"/>
        <Routes />
      </>
    );
}

export default App;
