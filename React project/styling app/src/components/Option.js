import React from "react";
import Options from "./Options";

const Option = (props) => (
    <div>
        <div className="widget-header">
        <h3 className="widget__title">Your Options</h3>
        <button className="button button--link" onClick={props.removeAll}>Remove All</button>
        </div>
            { props.option.length === 0 && <p className="widget--message">Please add an option to get started!..</p> }
            {
                props.option.map( (data,index) => <Options key = {index} optionText = {data} count = {index + 1} removeOne = {props.removeOne}/> )
            }
    </div>
)

export default Option;