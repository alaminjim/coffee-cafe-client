import Lottie from "lottie-react";
import login from "../assets/animat/Animation - 1745941950185.json";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import AuthContext from "../Context/AuthContext";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const { createSignIn, setUser } = useContext(AuthContext);
  const { errorMessage, setErrorMessage } = useState("");
  const navigate = useNavigate();

  const handelSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setErrorMessage("");

    createSignIn(email, password)
      .then((result) => {
        const user = result.user;

        setUser(user);
        toast.success("sign in successful..!");
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
  };
  return (
    <div>
      <div className="hero my-20 min-h-screen bg-[#854d3d3d]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-[550px] w-[300px] lg:text-left">
            <Lottie animationData={login}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <h1 className="text-4xl text-center text-[#854d3d] mt-4 font-bold">
              Log in now!
            </h1>
            <div className="card-body">
              <form onSubmit={handelSignIn} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>

                <button className="btn btn-neutral bg-[#854d3db6] text-amber-100 border-none mt-4">
                  Log in
                </button>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
                <span className="text-center">
                  Dont't Have An Account{" "}
                  <Link to="/register">
                    <span className=" pt-5 underline text-blue-600">
                      Register
                    </span>
                  </Link>
                </span>
              </form>
              {errorMessage && <p>{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
