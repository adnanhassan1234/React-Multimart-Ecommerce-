import React, { useState } from "react";
import Helmet from "../../Components/Helmet/Helmet";
import Button from "../../Components/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../../firebase.config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((userCredential) => {
        const user = userCredential.user;
        const storageRef = ref(storage, `images/${Date.now() + username}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
          (error) => {
            toast.error(error.message);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (getDownloadURL) => {
                await updateProfile(user, {
                  displayName: username,
                  photoURL: getDownloadURL,
                });
                await setDoc(doc(db, "user", user.uid), {
                  uid: user.uid,
                  displayName: username,
                  email,
                  photoURL: getDownloadURL,
                });
              }
            );
          }
        );
      });
      setLoading(false);
      toast.success("Account created successfully!");
      navigate("/login");
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
        <section className="vh-100 mb-5">
          <div className="container py-5 h-100">
            {loading ? (
              <div>
                <h4 className="text-center">Loading...</h4>
              </div>
            ) : (
              <div className="row">
                <div className="card p-3 p-lg-5 text-black m-auto ">
                  <form onSubmit={handleSignup}>
                    <div className=" text-center mb-4">
                      <i
                        className="ri-login-box-line fa-2x me-3"
                        style={{ color: "#ff6219" }}
                      ></i>
                      <span className="h1 fw-bold mb-0">Sign Up</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3">
                      Sign into your account
                    </h5>

                    <div className="input_field">
                      <div className="form-group my-2">
                        <label htmlFor="">Enter Username</label>
                        <input
                          type="text"
                          className="form-control "
                          placeholder="Enter Username"
                          required
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
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
                      <div className="form-group my-3">
                        <input
                          type="file"
                          onChange={(e) => setFile(e.target.files[0])}
                        />
                      </div>
                    </div>

                    <div className="pt-1 mb-4">
                      <Button
                        type="submit"
                        width="100%"
                        title="Sign Up"
                        height="47px"
                      />
                    </div>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Already have an account?
                      <Link to="/login" style={{ color: "#393f81" }}>
                        Login here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
        <br />
        <br />
        <br />
      </Helmet>
    </>
  );
};

export default SignUp;
