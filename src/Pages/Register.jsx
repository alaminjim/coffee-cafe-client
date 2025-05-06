import Lottie from "lottie-react";
import register from "../assets/animat/Animation - 1745922525028 (2).json";
import toast from "react-hot-toast";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";
import SocialLogin from "./SocialLogin";

const Register = () => {
  const { createRegister, setUser, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handelRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createRegister(email, password)
      .then((result) => {
        const user = result.user;

        updateUserProfile({ displayName: name, photoURL: photo }).then();

        setUser(user);
        toast.success("Register Successful");
        form.reset();
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });

    const passValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passValid.test(password)) {
      toast.error("Valid Password 6 characters one upper and lower case");
    }
  };
  return (
    <div>
      <div className="hero bg-[#854d3d3d] my-20 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:w-[600px] w-[350px] mb-10 lg:text-left">
            <Lottie animationData={register}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <h1 className="text-4xl text-center text-[#854d3d] mt-4 font-bold">
              Register now!
            </h1>
            <div className="card-body">
              <form onSubmit={handelRegister} className="fieldset">
                <label className="fieldset-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                <label className="fieldset-label">PhotoURL</label>
                <input
                  type="url"
                  name="photo"
                  className="input"
                  placeholder="PhotoURL"
                />
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

                <button className="btn bg-[#854d3db6] border-none text-amber-100 btn-neutral mt-4">
                  Register
                </button>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
                <span className="text-center">
                  Al Ready Have An Account{" "}
                  <Link to="/login">
                    <span className=" pt-5 underline text-blue-600">
                      Log in
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

export default Register;
