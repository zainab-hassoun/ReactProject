import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
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

    try {
      const response = await addUser(user);
      if (response.data != {}) {
        alert("User registered successfully");
      }
      navigate("/login");
    } catch (error) {
      alert("Failed to register user");
    }
  };
  //     e.preventDefault();
  //     let regobj = { id, name, password, email};
  //     if (IsValidate()) {
  //     //console.log(regobj);
  //     fetch("http://localhost:3006/user", {
  //         method: "POST",
  //         headers: { 'content-type': 'application/json' },
  //         body: JSON.stringify(regobj)
  //     }).then((res) => {
  //         toast.success('Registered successfully.')
  //         navigate('/login');
  //     }).catch((err) => {
  //         toast.error('Failed :' + err.message);
  //     });
  // }

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleadduser}>
          <div className="card">
            <div className="card-header">
              <h1>User Registeration</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
                <div className="col-lg-6">
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
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link to={"/login"} className="btn btn-danger">
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
