import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';//for ids  and keys

export default function list(){
    let [todos, setTodos] = useState([{task:"",id: uuidv4()}]);//array of todos
    let [ newTodo, setNewTodo] = useState(""); //for adding tasks
    
    let addNewTask = () =>{
        setTodos([...todos,{task : newTodo , id :uuidv4()}]);//function that add tasks
        setNewTodo(""); // to empty the input bar 
    }

    let updateTodoValue = (event) => {
        let a = setNewTodo(event.target.value);
        console.log(a);
    }

    let deletetodo = (id) =>{
        console.log(id);
        setTodos(todos.filter((todo)=> todo.id != id ));
    }

    return (
        <div>
            <input placeholder="Add a task" onChange={updateTodoValue} value={newTodo}></input>
            &nbsp;
            <button onClick={addNewTask} >Add task</button>
            <br></br>
            <br></br>
            <br></br>

            <h4>Task Todo</h4>
            <ul class="list-group">
                {
                    todos.map((todo)=>(
                        <li class="list-group-item" key={todo.id}>
                             <input type="checkbox" id={todo.id}></input>
                            <label ><span>{todo.task}</span></label>
                            &nbsp;
                             <button onClick={()=>deletetodo(todo.id)}>Delete</button>
                         </li>
                    ))
                }
            </ul>
        </div>
    );    
}
