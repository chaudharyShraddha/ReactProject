import React from "react";
import Header from "./Header";
import Action from "./Action";
import Option from "./Option";
import AddOption from "./AddOption";
import AddModal from "./AddModal";

export default class FormData extends React.Component{
    state = {
        option: [],
        selectedOption: undefined 
    }
    handleRemoveAll = () => {
        this.setState( () => ( { option: [] } ) );
    }
    handleRemoveOne = (optiontoRemove) => {
        this.setState( (prevState) => ({
            option: prevState.option.filter( (wholeArray) => {
                return optiontoRemove !== wholeArray;
            })
        }) )
    }
    randomPicker = () => {
        const randomNum = Math.floor( Math.random() * this.state.option.length );
        const data = this.state.option[randomNum];
        this.setState( () => ({
            selectedOption: data
        }))
    }
    addNewData = (option) => {
        if(!option){
            return "Enter valid value to add item";
        }else if(this.state.option.indexOf(option) > -1){
            return "This option is already exists";
        }

        this.setState( (prevState) =>  ({ option: prevState.option.concat(option) }) );
    }
    removeSelectedOption = () => {
        this.setState ( () => ({ selectedOption: undefined }) )
    }

    // 1). mounting
    componentDidMount() {
        try{
        const json = localStorage.getItem("options");
        const option = JSON.parse(json);

        if(option){
            this.setState( () => ({ option: option }) );
        }
        }catch(e){

        }
    }
    // 2).updating
    componentDidUpdate(prevProps, prevState) {
        if( prevState.option.length !== this.state.option.length ){
            const json = JSON.stringify( this.state.option );
            localStorage.setItem( "options", json );
        }
    }
    // 3). un-mounting
    componentWillUnmount(){
        console.log("component will unmount");
    } 
    render(){
        const title = "Indecision"
        const subtitle = "Put your life in the hands of a computer.";
        return (
            <div>
                <Header title= {title} subtitle = {subtitle} />
                <div className="container">
                    <Action hasOption = {this.state.option.length > 0} randomPicker = {this.randomPicker} />
                    <div className="widget">
                        <Option option = {this.state.option} removeAll = {this.handleRemoveAll} removeOne = {this.handleRemoveOne} />
                        <AddOption addNewData = {this.addNewData}/>
                    </div>
                </div>
                <AddModal selectedOption = {this.state.selectedOption} removeSelectedOption={this.removeSelectedOption}/>
            </div>
        )
    }
}
