import React, {Component} from 'react'

class Todos extends Component{
    constructor(){
        super();

        this.state={
            todos:[],
            todo:''
        }
    }

    onTodoChange=(event)=>{
        var currentTodo=event.target.value;
        this.setState({
            todo:currentTodo
        })
    }

    onAddTodo=()=>{
        this.setState({
            todos:[
                ...this.state.todos,
                this.state.todo
            ],
            todo:''
        })
    }

    removeTodo(todo){
        this.setState({
            todos:this.state.todos.filter((currentTodo)=>{
                return currentTodo!=todo;
            })
        })
    }

    render(){
        return(
            <div>
                <h1>Todos</h1>
                <input type="text" value={this.state.todo} onChange={this.onTodoChange} name="todo"/>
                <button onClick={this.onAddTodo}>Add</button>
                <ul>
                {
                    this.state.todos.map((todo,index)=>{
                        return <li key={index}>{todo} <button onClick={()=>this.removeTodo(todo)}>Delete</button></li>
                    })
                }
                </ul>

            </div>
        )
    }
}
 export default Todos;