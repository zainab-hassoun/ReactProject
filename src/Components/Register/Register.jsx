import { useState, useEffect } from "react";
import { Link, useNavigate, } from "react-router-dom";
import './Register.css';
import { addUser } from "../../api/api";

const Register = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (name === null || name === "") {
      isproceed = false;
      errormessage += " Fullname";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const handleadduser = async (e) => {
    e.preventDefault()
    const user = { id, name, password, email };

console.log(user);
   
    try {
      const response = await addUser(user);
      if (response.data != {} && user.email != email) {
        alert("User registered successfully");
      }
      navigate("/login");
    } catch (error) {
      alert("Failed to register user");
    }
  
 

     }

  return (
    <div>
     
        <form className="container" onSubmit={handleadduser}>
        
          
           
              <h2>User Registeration</h2>
              <br/><br/>
           
            <div className="card-body">
              <div className="row">
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>
                      User Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>
                      Password <span className="errmsg">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                    ></input>
                  </div>
                </div>{" "}
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>
                      Full Name <span className="errmsg">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="form-group">
                    <label>
                      Email <span className="errmsg">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div >
              <button type="submit" className="button-55">
                Register
              </button>
              {/* 
              <br/> */}
              <Link to={"/login"} className="button-55">
                Close
              </Link>
            </div>
         
        </form>
     
    </div>
  );
};

export default Register;
