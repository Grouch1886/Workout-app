import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <div className="ui secondary pointing menu" style={{"background-color": "#432386"}}>
        <Link to="/" className="item" style={{"color": "whitesmoke", "font-size": "1.3rem", "font-weight": "600"}}>
                Woktout App
        </Link>

        <div className="right menu font-color">
            <Link to="/" className="item " style={{"color": "whitesmoke", "font-size": "1.3rem", "font-weight": "400"}}>All Programs</Link> 
            <Link to="/About" className="item" style={{"color": "whitesmoke", "font-size": "1.3rem", "font-weight": "400"}}>About</Link>  
        </div>
    </div>
      
      
    )
}

export default Header;