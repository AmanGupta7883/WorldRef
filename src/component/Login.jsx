import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './styles/Login.css'
import './styles/global.css'
import style from 'styled-components'
import { AiOutlineEyeInvisible, AiFillEye } from 'react-icons/ai'

const Wrapper = style.section`
display:flex;
justify-content:center;
h4::after{
    content:'';
    display:block;
    border-bottom: 0.2px solid #80808054;
    margin: 0.5rem auto;
}
`

const Login = () => {

    const nav = useNavigate();
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [authenticated, setAutenticated] = useState(false);
    const [msg, setMsg] = useState("");
    const [show, setShow] = useState(false);

    const changeStatus=()=>{
        setShow(!show);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(email==="admin@gmail.com"){
            if(password==="admin"){
                nav('/');
                location.reload();
                localStorage.setItem("token","q5we9E9We");
                localStorage.setItem("isAuthenticated","true");
            }else{
                setPasswordErr("Please check your password");
                setEmailErr("");
            }
        }else{
            setEmailErr("Invalid Email!");
        }

        //Getting error while using this API so ihad used static pre-defined credentials
       // await axios.post('https://api.worldref.dev/dealx/rest/api/v1/user/signin', { email: email, password: password })
        //     .then((res) => {
        //         console.log(res);
        //         setAutenticated(true)
        //         localStorage.setItem("token", res.data.token);
        //         localStorage.setItem("username", email);
        //         localStorage.setItem("state", true);
        //         localStorage.setItem("isAuthenticated","true");
        //         if(authenticated){
        //             nav('/');
        //         }else{
        //             setMsg("Please check your email and password");
        //         }
        //     })
        //     .catch((error) => {
        //         setMsg("Please check your email and password");
        //     });

    }

    return (
        <>
            <Wrapper>
                <div className="loginBox p-1 py-4 mt-5">
                    <form action="" method="post" onSubmit={handleSubmit}>

                        <h4 className="mb-4 fw-semibold text-dark text-center">Seller Log in</h4>
                        <div className='px-5'>
                            <div className='mb-2'>
                                <label className='fw-semibold'>Email Id <span>*</span></label><br/>
                                <label className='text-center text-danger' style={{ "fontSize": "13px" }}>{emailErr}</label>
                                <input type="email" className='border' id='mail' required placeholder='Enter your email id used to create the account' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mb-2 fw-semibold'>
                                <label>Password <span>*</span></label><br/>
                                <label className='text-center text-danger' style={{ "fontSize": "13px" }}>{passwordErr}</label>
                                
                                    <input type={show?"text":"password"} className='border' id='pass' required placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <span className='fs-5' style={{
                                        "color": "#1580fa",
                                        "position": "relative",
                                        "top": "-35px",
                                        "textAlign": "end",
                                        "display": "flex",
                                        "alignItems": "center",
                                        "justifyContent": "end",
                                        "margin": "0 1rem"
                                    }}>
                                        <div onClick={changeStatus} className='icns'>
                                            {
                                                (show) ? <AiFillEye /> : <AiOutlineEyeInvisible />
                                            }
                                        </div>
                                    </span>
                                
                            </div>

                            <div className='d-flex justify-content-between fw-semibold'>
                                <div className="remember d-flex align-items-center">
                                    <input type="checkbox" name="check" id="check" required/>
                                    <label className='ps-1 fw-semibold' style={{ "fontSize": "13px" }} htmlFor='check'>Stay signed in</label>
                                </div>
                                <div className="fpass">
                                    <label>
                                        <a href="#" style={{ "fontSize": "13px", "fontWeight": "normal" }}>Forgot Password?</a>
                                    </label>
                                </div>
                            </div>

                            <button className='btn btn-primary Button fw-semibold container p-2 my-3'>Log in</button>

                            <div className="newUser text-center fw-semibold">
                                Don't Have An Account?{" "}<Link to='/register'>Create Account</Link>
                            </div>
                        </div>
                    </form>
                </div >
            </Wrapper >
        </>
    )
}

export default Login
