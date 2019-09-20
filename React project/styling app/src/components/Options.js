import React from "react";

const Options = (props) =>  (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button 
            className="button button--link"
            onClick = { (e) => {
                props.removeOne(props.optionText);
            }} 
        > 
            Remove 
        </button>
    </div>
)


export default Options;