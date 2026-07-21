import {useState} from "react";
function TodoPage(){
    const [todo,setTodo]=useState("");
    const [todos,setTodos]=useState([
        {text:"Learn React",done:false},
        {text:"Practice DSA",done:true},
        {text:"Learn AWS",done:false}
    ]);
    function addTodo(){
        if(todo==="") return;
        setTodos([
            ...todos,{
                text:todo,done:false
            }
        ]);
        setTodo("");

    }
    function toggleTodo(index){
        const newTodos=[...todos];
        newTodos[index].done=!newTodos[index].done;
        setTodos(newTodos);

    }
    function deleteTodo(index){
        const newTodos=todos.filter((item,i)) = i !== index ;
        setTodos(newTodos);
        }
        const completed=todos.filter(t= t.done).length;
        const pending=todos.length-completed;
        return(
            <><div className="container mt-5">
                <h2>Personal Todo List</h2>
                <div className="row mt-4">
                    <div className="alert alert-success">
                        Completed:{completed}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="alert altert-warning">
                        Pending:{pending}
                    </div>
                </div>
                <div className="col=md=4">
                    <div className="alert alert-primary">
                        Total:{todos.length}
                    </div>
                </div>
            </div><div className="input-group mb-4">
                    <input
                        type="text"
                        className="input-group mb-4">
                        placeholder="enter Todo"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    </input>
                    <button className="btn btn-success" onClick={addTodo}>
                        Add
                    </button>
            <ul className="list-group">
                {todos.map((item,index)=> {
                    <li 
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center"
                    >
                    <><div>
                        <input
                            type="checkbox"
                            checked={item.done}
                            onCharge={() = togleTodo(index)} />{""}
                        {item.done ? <s>{item.text}</s> : item.text}
                    </div><button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteTodo(index)}
                    >
                            Delete
                        </button></>
                    </li>
                })}
            </ul>
            </div></>
        
        );

}export default TodoPage;