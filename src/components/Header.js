import { Link } from "react-router-dom";

import './Header.css'
import coffee_saver from '../images/coffee-saver-logo-light.png'

// import React, { useState } from 'react';


export function Header(){

  return(
    <div className="header">
      <div className="header__nav">
        <Link to="/"><img src={coffee_saver} alt="coffee saver logo" /></Link>
      </div>
    </div>
  )
}

