import React from "react";

const PortfolioItem = (props) => (
    <div>
        <h3>A thing I've Done!</h3>
        <p>the page with item no : {props.match.params.id} </p>
    </div>
)

export default PortfolioItem;