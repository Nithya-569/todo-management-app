import {useState} from "react";
function TodoPage(){
    const[todo,setTodo]=useState("");
    const[tag,setTage]=useState("No tag");
    const[filter,setFilter]=useState("All");
    const[todos,setTodos]=useState([
        {id:1,text:"learn java",done:false,tag:"Urgent"},
         {id:2,text:"practice dsa",done:true,tag:"Important Prioritu"}
        {id:3,text:"learn AWS",done:false,tag:"Low priority "}
    ]);
    function addTodo(){
        if(todo==="") return;
        const newTodo={
            id:Date.now(),
            text:todo,
            done:false,
            tag:tag
        };
        setTodos([...todos,newTodo]);
        setTodo("");
        setTag("No Tag");
    }
    function toggleTodo(id){
        const updated=todos.map((item)=>{
            if(item.id==id){
                return {...item,done:!item.done};
            }
            return item;
        });
        setTodos(updated);
    }
    function deleteTodo(id){
        const updated=todos.filter((item)=>{
                item.id!==id
        })
        setTodos(updated);
    }
    function editTodo(id){
        const value=prompt("enter new todo");
        if(!value) return;
        const updated=todos.map((item)=>{
            if(item.id==id){
                return {...item,text:value};
            }
            return item;
        });
    }setTodos(updated);
}
const completed=todos.filter((item)=>{
    item.done.length;
});
const pending =todos.length-completed;
const filteredTools=todos.filter((item)=>{
    if(filter==="All") return true;
    return item.tag===filter;
});
return(
    <div className="container mt-5">
        <h2> College todo listt</h2>
        <div className="row mt-4">
            <div className="col"> 
                <div className="alert alert-success"> 
                    Completed:{completed}
                </div>
            </div>
            <div className="col">
                <div className="alert alert-warning">
                    Pending:{pending}
                </div>
            </div>
            <div className="col">
                <div className="alert alert-primary">
                    Total:{todos.length}
                </div>
            </div>

        </div>
        <div className="row mb-4">
            <div className="col-md-5">
                <input 
                type="text"
                className="form-control"
                placeholder="enter todo"
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}  
                />

            </div>
            <div className="col-md-3">
                <select 
                 className="form-select"
                 value={tag}
                 onChange={(e)=>setTag(e.target.value)}
                 >
                    <option>No tag</option>
                    <option>Urgent</option>
                    <option>Important</option>
                    <option>Low Priority</option>
                 </select>
            </div>
            <div className="col-md-2">
                <button
                className="btn btn-success w-100"
                onClick={addTodo}
                >
                    Add
                </button>

            </div>
        </div>
        <div className="mb-3">
            <button className="btn btn-secondary me-2" onClick={()=> setFilter("All")}>
                All
            </button>
            <button className="btn btn-secondary me-2" onClick={()=>setFilter("urgent")}>
                Urgent </button>
            <button className="btn btn-secondary me-2" onClick={()=> setFilter("important")}
            >
                important
            </button>
            <button className="btn btn-secondary me-2" onClick={()=> setFilter("low priority ")}
            >
                low priority 
            </button>

        </div>
        <ul className="list-group">
            {filteredTodos.map((item)=>{
                <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                >
                    <div>
                        <input
                        type="checkbox"
                        checked={item.done}
                        onChange={()=> toggleTodo(item.id)}
                        />
                        {""}
                        {item.done ? <s> {item.text </s> :item.text}
                        <span className="badge bg-primary ms-2">
                            {item.tag}
                        </span>

                    </div>
                    <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={()=>editTodo(item.id)}
                    >
                        Edit
                    </button>
                    <button 
                    className="btn btn-danget btn-sm"
                    onClick={()=>deleteTodo(item.id)}
                    >
                        Delete
                    </button>
                </li>
            })}
        </ul>
        <button className="btn btn-info mt-4">
            Share Todo List
        </button>
    </div>
        
);
export default TodoPage;