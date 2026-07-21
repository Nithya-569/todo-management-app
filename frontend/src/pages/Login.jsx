import {Link,useNavigate} from "react-router-dom";
function Login(){
    const navigate=useNavigate();
    function handleLogin(e){
        e.preventDefault();
        navigate("/dashboard");
    }
    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card p-4 shadow">
                        <h2 className="text-centerr mb-4">Login</h2>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label>Email</label>
                                <input  type="email"
                                className="form-control"
                                placeholder="enter email"
                                required/>

                            </div>
                            <div className="mb-3">
                                <label>Password</label>
                                <input
                                type="password"
                                className="form-control"
                                placeholder="enter password"
                                required/>

                            </div>
                            <button type="submit"
                            className="btn btn-primary w-100"
                            >
                                login
                            </button>
                        </form>
                        <p className="text-center mt-3">
                            don;t have accoutn ?
                            <Link to="/signup"> SignUp</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;