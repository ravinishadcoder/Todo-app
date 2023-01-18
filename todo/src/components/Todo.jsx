import React from "react";
import '../App.css';
import Todolist from "./Todolist";
class Todo extends React.Component{
    constructor(){
        super();
        this.state={
            task:[],
            text:""
        }
    }
    handleChange=(e)=>{
        this.setState({
            text:e.target.value
        })
        
    }
    handleClick=(e)=>{
        e.preventDefault();
        
        this.setState({
            text:"",
            task:[...this.state.task,this.state.text]
        })
        
    }
    handleDelte=(ind)=>{
        let newTask=this.state.task.filter((el,i)=>i!==ind)
        this.setState({
            text:'',
            task:newTask
        })
    }
    render(){
        return(
            <div className="todo-container">
                <h2>Todo App</h2>
                <input type="text" 
                value={this.state.text} 
                onChange={this.handleChange}
                placeholder="write your task"/>
                <button onClick={this.handleClick}>Add</button>
                <div>
                    <Todolist item={this.state.task} handleDelte={this.handleDelte}/>
                </div>
            </div>
        )
    }
}

export default Todo;