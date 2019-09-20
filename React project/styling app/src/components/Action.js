import React from "react";

const Action = (props) => (
    <button className="big-button" onClick={props.randomPicker} disabled={ !props.hasOption}>What Should I Do ?</button>
)

export default Action;