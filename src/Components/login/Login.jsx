import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/api";
import { toast } from "react-toastify";
import './Login.css';

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

    users.forEach((user) => {
      if (user.email === username) {
        isUsernameValid = true;
        if (user.password === password) {
          isPasswordValid = true;
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
      navigate("/");
    }
  };

  // const validate = () => {
  //   let valid = true;
  //   if (!username) {
  //     valid = false;
  //     toast.warning('Please enter username');
  //   }
  //   if (!password) {
  //     valid = false;
  //     toast.warning('Please enter password');
  //   }
  //   return valid;
  // };

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
           
          </div> <Link className="button-55" to={'/register'}>New User</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
