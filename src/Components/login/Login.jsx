import { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3006',
});



import { toast } from "react-toastify";
import './Login.css';
 
export const UserContext = createContext();
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
 
  useEffect(() => {
    sessionStorage.clear();
  }, []);
 
  const handleLogin2 = async () => {
    const response = await api.get("/users");
    return response.data;
  };
 
  useEffect(() => {
    const getAllUsers = async () => {
      const users = await handleLogin2();
      if (users) {
        setUsers(users);
      }
    };
 
    getAllUsers();
  }, []);
 
  const handleLogin = (e) => {
    e.preventDefault();
 
    let isUsernameValid = false;
    let isPasswordValid = false;
    let loggedInUser = null;
 
    users.forEach((user) => {
      if (user.email === username) {
        isUsernameValid = true;
        if (user.password === password) {
          isPasswordValid = true;
          loggedInUser = user;
        }
      }
    });
   
     
    
    if (!isUsernameValid) {
      setError('Invalid username');
    } else if (!isPasswordValid) {
      setError('Invalid password');
    } else {
      setError('');
      console.log('Successful login');
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      navigate("/");
    }
  };
 
  return (
    <div className="back">
      <br/>
      <Link className="button-55" to={'/Loginmanger'} style={{ margin: '5px' }}>New Manager</Link>
      <div style={{ margin: '80px', width: '400px' }}>
        <form className="container" onSubmit={handleLogin}>
          <h2>User Login</h2>
          <br/>
          <div className="card-body">
            <div className="form-group">
              <label>User Name <span className="errmsg">*</span></label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Password <span className="errmsg">*</span></label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" />
            </div>
          </div>
          <div>
            {error && <p>{error}</p>}
            <button type="submit" className="button-55" width={'50px'}>Login</button>
          </div>
          <Link className="button-55" to={'/register'}>New User</Link>
        </form>
      </div>
    </div>
  );
};
 
export default Login;

 
