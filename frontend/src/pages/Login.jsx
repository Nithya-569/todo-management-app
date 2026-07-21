import {Link} from 'react-router-dom';
function Login(){
    return{
        <div className="container ch-100 d-flex justify-content-center align-items-center">
            <div className="card shadow p-4" style={{width:400px}}>
            <h2 className="text-center mb-4 "> Todo Manager</h2>
            <form>
            <div classame="mb-3">
            <label className="form-label">Email</label>
            <input 
            type="email"
            className="form-control"
            placeholder="enter your mail "
            />
        </div>
        <div className="mb-3">
        <label className="form=label">Password</label>
        <input 
        type="password"
        className="form-control"
        placeholder="enter password"
        />
        </div>
        <button className="btn btn-primary w-100">Login
        </button>
        </form>
        <p className="text-center mt-3">
        Don't have account?
        <Link to="/signup"> Sign Up </Link>
        </p>
        </div>
        </div>
        
    );
    }
}
export default Login;