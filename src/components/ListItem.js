
export default function ListItem({todo,onDeleteTask, onCompleteTask}) {

    function onClick(){
            onCompleteTask(todo)  
    }

    return(
        <div style={{
            textDecoration:todo.isCompleted?"line-through": null,
        }}
        >
        {todo.value}        
        <button onClick={() => onDeleteTask(todo.id)}>
               Delete
        </button>
        
        <button onClick={onClick}  >
                Complete
        </button>
    </div>
        
    )
}