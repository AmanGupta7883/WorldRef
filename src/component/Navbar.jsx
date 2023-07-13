import React, { useState } from 'react'
import '../component/styles/global.css'
import { Link } from 'react-router-dom'


const Navbar = (log) => {
    const [status,setStatus] = useState(localStorage.getItem("isAuthenticated"));

    setInterval(() => {
        if(status){
            setStatus(true)
        }
    }, 10);

    const logout = () => {
        localStorage.clear();
        location.reload();
        setStatus(false);
    }

    return (
        <>
            <nav className="d-flex justify-content-between align-items-center p-4 px-5" style={{ "boxShadow": "0 8px 13px #00000012" }}>
                <div>
                    <Link className="d-flex align-items-center" to='/' style={{ "cursor": "pointer" }}>
                        <img src="https://worldref.co/wp-content/uploads/2023/03/WorldRef-App-logo-Know-us.png" alt="Logo" width="30" className="d-inline-block align-text-top" />
                        <label className='fw-bold text-dark fs-4 ps-1'>WorldRef</label>
                    </Link>
                </div>
                <div className="nav-items">
                    <ul className='d-flex text-decoration-none align-items-center mb-0'>
                        <li>Services</li>
                        <li >Our Work</li>
                        <li >App</li>
                        <li >My Deals</li>
                        <li >Contact Us</li>
                        <li ><Link to='/login' >{(status) ? <button className='btn btn Button fw-semibold py-1 px-3' onClick={logout}>Log Out</button> : <>Seller Login</>}</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar