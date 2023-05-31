import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/ToDoForm";
import ListItem from "./components/ListItem";


export default function App () {
    const [todos, setTodos]= useState([]);
    const [value, setValue]= useState("");

    const onChange=(e)=> {
        setValue(e.target.value);
    }

    const onAddTask=(e)=> {
        const obj = {
            id:uuidv4(),
            value,
            isCompleted: false,
        };
        if (value.trim()) {
            setTodos(todos.concat(obj));
            setValue("");
        }
    }
    
    const onDeleteTask=(itemId)=> {
         setTodos([...todos].filter((todo) => todo.id !== itemId));
    }

    const onCompleteTask=(todo)=>{
        setTodos(
            todos.map((el)=>
            el.id===todo.id
            ?{...el,isCompleted:!el.isCompleted}
            :el
            )
        );
    }
   
        return (
            <div className="form">
                <TodoForm value={value} onChange={onChange} onAddTask={onAddTask} />

                <div className="list">   
                    {todos.map((todo)=>(
                        <ListItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTask={onDeleteTask}
                            onCompleteTask={onCompleteTask}
                        /> 
                    ))}
                </div>
            </div>
        );
    }
