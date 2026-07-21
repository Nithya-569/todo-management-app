import {Link} from "react-router-dom";
function Dashboard(){
    const list=["Personal","College","shopping", "office"];
    return(
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Todo Dashboard</h2>
                <button className="btn btn-primary">
                    +New List
                </button>
            </div>
            
                lists.map(list,index) = (
                    <div 
                     className="card p-3 mb-3"
                     key={index}
                     >

                <div className="d-flex justify-content-between align-items-center">
                    <Link to="/todo/1" className="text-decoration-none"> {List} </Link>
                    <button className="btn btn-danger btn-sm">
                        Delete
                        </button>    
                    </div>
                </div>
                
                )
    
            <button className="btn btn-secondary mt-3">
                Logout 
            </button>
        </div>
       );

}
export default Dashboard;