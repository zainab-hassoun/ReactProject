import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import  api  from "../../api/api";
import { toast } from "react-toastify";

const Loginmanger = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
const[mangers,setMangers] = useState([]);
  useEffect(()=>{
    sessionStorage.clear();
  },[]);

  const validate = () => {
    let valid = true;
    if (!username) {
      valid = false;
      toast.warning('Please Enter Username');
    }
    if (!password) {
      valid = false;
      toast.warning('Please Enter Password');
    }
    return valid;
  }
const handleLogin2 = async ()=>{
  const response = await api.get("/mangers");
  return response.data;
}
useEffect(()=>{
  const allmangers = async()=>{
    const mangers = await handleLogin2();
    if(mangers){
      setMangers(mangers);
    }
  }
  allmangers();
  
},[]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // if (!validate()) return;
  
    mangers.map((manger)=>{
    if(manger.email === username && manger.password === password){
      alert('Logegd in');
      navigate("/jewerlysManger");
    }
   })
  }

  return (
    <div className="row">
      <div className="offset-lg-6 col-lg-6" style={{ margin: '80px', width: '450px' }}>
        <form  className="container" onSubmit={handleLogin}>
          <div className="card">
            <div className="card-header">
              <h2>Manger Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>User Name <span className="errmsg">*</span></label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}  className="form-control"></input>
              </div>
              <div className="form-group">
                <label>Password <span className="errmsg">*</span></label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control"></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Login</button><br/> <br/>
             
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginmanger;
