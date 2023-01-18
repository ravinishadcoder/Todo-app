import React from "react";
import '../App.css';

class Todolist extends React.Component{

    render(){
        return(
            <div>
                
                {
                    
                    this.props.item.map((el,i)=>(
                       <div className="todo-list" key={i}>
                       <p >{el}</p>
                       <button onClick={this.props.handleDelte.bind(this,i)}>delete</button>
                       </div>
                    ))
                }
            </div>
        )
    }
}

export default Todolist;