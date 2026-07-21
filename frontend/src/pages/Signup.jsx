import {Link} from "react-router-dom";
function SignUp(){
    return(
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="card p-4 shadow " style={{width:"400px"}} div>
                <h2 className="text-center mb-4">Signup</h2>
            <form>
                <div className="mb-3">
                    <label>Name</label>
                    <input
                    type="text"
                    className="form-control"
                    placeholder="enter name"
                    />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                <input
                 type="email"
                 className="form-control"
                 placeholder="enter mail" 
                 />
                 </div>
                 <button className="btn btn-success w-100">
                    create account
                    </button>     

            </form>
            <p className="text-center mt-3">
                Already have an accoutn?
                <Link to="/"> Login</Link>
            </p>
            </div>
        </div>
            
);
    
}