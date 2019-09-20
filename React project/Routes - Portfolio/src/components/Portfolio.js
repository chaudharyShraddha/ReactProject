import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => (
    <div>
        <h3>My Portfolio</h3>
        <p>Checkout the following things I've done : </p>
        <Link to="/portfolio/1">Link One</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/portfolio/2">Link Two</Link>
    </div>
)

export default Portfolio;