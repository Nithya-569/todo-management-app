import {useState} from 'react';
import {Link} from 'react-router-dom';
function Dashboard(){
    const [lists,setLists] =useState([
        {
        id:1,
        name:"Personal",
        totol:5,
        completed:2
    },{
        id:2,
        name:"college",
        totol:8,
        completed:5
    }]);
    const [newList,setNewList]=useState("");
    function addList(){
        if(newList === "") return;
        const list={
            id:Date.now(),
            name:newList,
            total:0,
            completed:0
        };
        setLists([...lists,list]);
        setNewList("");
    }
    function deleteList(id){
        const updated =lists.filter((list) => {
            return list.id !== id;
        });
        setLists(updated);
    }
    function renameList(id){
        const name=prompt("enter new list name");
        if(!name) return;
        const updated =lists.map((list) =>{
            if(list.id==id){
                return {...list,name:name};
            }
            return list;
        });
        setLists(updated);
    }
    return(
        <div className="container mt-5">
            <h2 className="mb-4">Todo Dashboard</h2>
            <div className="input-group mb-4">
                <input 
                type="text"
                className="form-control"
                placeholder="New Todo List"
                value={newList}
                onChange={(e) = setNewList(e.target.value)}
                />
                <button
                className="btn btn=primary"
                onClick={addList}
                > Create</button>
                 </div>
                 {
                    lists.map(list) = (
                        <div 
                            className="card mb-3"
                            key={list.id}>
                                <div className="card-body">
                                    <h5>{list.name}</h5>
                                    <p> Total todos:{list.total}</p>
                                    <p> Completed:{list.completed}</p>
                                    <div className="d-flex gap-2">
                                        <Link
                                        to={`/todo/$list.id}`}
                                        className="btn btn-success btn-sm"
                                        >
                                            open
                                        </Link>
                                        <button className="btn btn-warning btn-sm"
                                        onClick={()=> renameList(list.id)}
                                        > Rename</button>
                                        <button className="btn btn-danger btn-sm"
                                        onClick={()=>deleteList(list.id)}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </div>
                            </div>
                    )
                 }
                 <button classNmae="btn btn-secondary mt-3">
                    Logout
                 </button>
        </div>
    );
}
export default Dashboard;

