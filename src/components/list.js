import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';//for ids  and keys

export default function list(){
    let [todos, setTodos] = useState([{task:"",id: uuidv4(),isDone : false}]);//array of todos
    let [ newTodo, setNewTodo] = useState(""); //for adding tasks
    
    let addNewTask = () =>{
        if(newTodo != ""){
        setTodos([...todos,{task : newTodo , id :uuidv4(),isDone:false}]);//function that add tasks
        setNewTodo(""); // to empty the input bar 
        }
    }

    let updateTodo = (event) => {
        let a = setNewTodo(event.target.value);
        console.log(a);
    }
    let updateTodoValue = (id,newTask) => {
        if(newTask != ""){
        const updatedTodos = todos.map(todo => 
        todo.id === id ? {...todo, task : newTask } : todo 
       );
       setTodos(updatedTodos);
        }
        else{ 
            alert("First Enter new value in input bar ");
        }
    }

    let markAsDone = (id) =>{
        setTodos((prevTodos)=>
        prevTodos.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo,
                    isDone : true,
                };
            }
            else{
                return todo;
            }
        }))
    }
    let deletetodo = (id) =>{
        console.log(id);
        setTodos(todos.filter((todo)=> todo.id != id ));
    }

    return (
        <div>
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Add a task" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={updateTodo} value={newTodo} ></input>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={addNewTask}>Add Task</button>
            </div>

            <h4>Task Todo</h4>
            <ul class="list-group">
                {
                    todos.map((todo)=>(
                        <li class="list-group-item" key={todo.id}>
                            <span style={todo.isDone ? {textDecoration:"line-through"}: {}}>
                            <blockquote class="blockquote">
                            <p>{todo.task}</p>
                            </blockquote>
                                </span>
                            &nbsp;&nbsp;&nbsp;
                             <button onClick={()=>markAsDone(todo.id)} type="button" class="btn btn-outline-success">Mark as Done</button>
                             &nbsp;&nbsp;
                             <button onClick={()=>updateTodoValue(todo.id,newTodo)} type="button" class="btn btn-outline-warning">Update</button>
                             &nbsp;&nbsp;
                             <button onClick={()=>deletetodo(todo.id)} type="button" class="btn btn-outline-danger">Delete</button>
                         </li>
                    ))
                }
            </ul>
        </div>
    );    
}
