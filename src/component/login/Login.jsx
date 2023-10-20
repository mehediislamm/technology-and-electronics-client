

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext, useState } from "react";

import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import swal from 'sweetalert';
import { AuthContext } from "../authProvider/AuthProvider";
import app from "../firebase/firebase.config";



const Login = () => {

    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');

    const { signIn, } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();



    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        setLoginError('');
        setSuccess('');
        e.target.reset();

        signIn(email, password)
            .then(result => {
                console.log(result.user);

                setSuccess(swal({
                    title: "Good job!",
                    text: "login success!",
                    icon: "success",
                    button: "Aww yiss!",
                  }))

                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => { console.log(result.user) })
            .catch(error => { console.error(error) })

    }

    return (

        <div className="bg-[#e5e9ee] rounded-xl">
            <h2 className="text-3xl text-center pt-5 font-bold text-yellow-800 ">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mb-3">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="flex justify-center" >
                {
                    loginError && <p className=" text-red-700">{loginError}</p>
                }
                {
                    success && <p className=" text-green-600">{success}</p>
                }
            </div>

            <div className="divider mx-auto w-1/2">OR</div>
            <div className="flex mb-5 gap-5 justify-center">
                <button className="btn ">
                    <FaGithub></FaGithub>
                    GITHUB</button>
                <button onClick={handleGoogleSignIn} className="btn ">
                    <FaGoogle></FaGoogle>
                    GOOGLE</button>
            </div>

            <p className="text-xl text-center mb-5 pb-5">Do not have an account <Link to={'/register'} className=" text-blue-600 text-xl font-bold">Register</Link></p>
        </div>

    );
};

export default Login;