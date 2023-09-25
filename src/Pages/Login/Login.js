import React, { useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import "./login.scss";
import Button from "../../Components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        const user = userCredential.user;
        console.log("user:", user);
        setLoading(false);
        toast.success("Successfully logged in");
        navigate("/checkout");
      });
    } catch (error) {
      setLoading(false);
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <Helmet title="login">
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row">
              {
                loading? <div> <h4 className="text-center">Loading...</h4></div> :
                <div className="card p-3 p-lg-5 text-black m-auto">
                <form onSubmit={handleLogin}>
                  <div className=" text-center mb-4">
                    <i
                      className="ri-login-box-line fa-2x me-3"
                      style={{ color: "#ff6219" }}
                    ></i>
                    <span className="h1 fw-bold mb-0">Login</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3">
                    Sign into your account
                  </h5>

                  <div className="input_field">
                    <div className="form-group my-2">
                      <label htmlFor="">Enter email</label>
                      <input
                        type="email"
                        className="form-control "
                        placeholder="Enter email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="form-group my-3">
                      <label htmlFor="">Enter password</label>
                      <input
                        type="password"
                        className="form-control "
                        placeholder="Enter password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="pt-1 mb-4">
                    <Button
                      type="submit"
                      width="100%"
                      title="Sign In"
                      height="47px"
                    />
                  </div>

                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?
                    <Link to="/signup" style={{ color: "#393f81" }}>
                      Register here
                    </Link>
                  </p>
                </form>
              </div>
              }
            </div>
          </div>
        </section>
      </Helmet>
    </>
  );
};

export default Login;
