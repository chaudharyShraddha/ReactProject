import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <div>
        <h1>Portfolio</h1>
            <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>&nbsp;&nbsp;&nbsp;
            <NavLink to="/contact" activeClassName="is-active" >Contact</NavLink>&nbsp;&nbsp;&nbsp;
    </div>
)

export default Header;