export default function TodoForm ({value, onChange, onAddTask}){
    return(
        <div>
            <input
                placeholder="Add your task name"
                value={value}
                onChange={onChange}
            ></input>
            <button onClick={onAddTask}>Add</button>
        </div>
    )
}