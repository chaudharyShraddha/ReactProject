import React from "react";

export default class AddOption extends React.Component{
    // new class syntax so dont need to bind anything
    state = {
        error : undefined
    }
    submit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.addNewData(option);

        this.setState( () => ( { error } ) );

        if(!error){
            e.target.elements.option.value = '';
        }

    }
    render(){
        return (
            <div>
                { this.state.error && <p className="add-option-error">{this.state.error}</p> }
                
                <form className="add-option" onSubmit={this.submit}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button" type="submit">Add Option</button>
                </form>

            </div>
        )
    }
}
