import Lottie from "lottie-react";
import login from "../assets/animat/Animation - 1745922525028 (2).json";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const { createSignIn, setUser } = useContext(AuthContext);

  const handelSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        setUser(user);
        toast.success("sign in successful..!");
        form.reset();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 my-20 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center w-[450px] lg:text-left">
            <Lottie animationData={login}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <h1 className="text-4xl text-center mt-4 font-bold">Log in now!</h1>
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
                <button className="btn btn-neutral mt-4">Log in</button>
                <div className="divider">OR</div>
                <span className="text-center">
                  Dont't Have An Account{" "}
                  <Link to="/register">
                    <span className=" pt-5 underline text-blue-600">
                      Register
                    </span>
                  </Link>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
