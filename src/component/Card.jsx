import React, { useState, useEffect } from 'react'
import './styles/card.css'
import { useNavigate } from 'react-router-dom';
import { BsCheck } from 'react-icons/bs'
import { ImShare } from 'react-icons/im'

const Card = () => {
    const nav = useNavigate();
    const [date, setDate] = useState();
    const d = new Date();

    useEffect(() => {
        setDate(d.getDate() + "/" + d.getUTCMonth() + "/" + d.getFullYear());
    }, [])

    const checkLogin = () => {
        const myToken = localStorage.getItem("token");
        if (myToken) {
            alert("Already Loginned");
        } else {
            nav('/login')
        }
    }

    return (
        <>
            <div className="card">
                <div className="left border">
                    <div className="date p-3 d-flex w-100">
                        <div>
                            {date}
                        </div>
                        <div className="minfo d-flex w-100 justify-content-end aling-items-center" style={{ "gap": "15rem" }}>
                            <div className="id"><span className='text-dark fw-bold'>RFQ ID  </span>19012548</div>
                            <div className="vBadge bg-success rounded-pill text-white px-1 d-flex align-items-center" style={{ "fontSize": "13px" }}> <span className='rounded-circle m-auto me-1 d-flex align-items-center' style={{ "color": "green", "background": "white", "padding": "2px" }}><BsCheck /></span> Verified</div>
                        </div>
                    </div>
                    <div className="content py-3 px-3">
                        <div className='d-flex justify-content-between'>
                            <div>
                                <label> <span className='fw-bold text-dark'>Deal No:</span>1429</label>
                            </div>
                            <div style={{color:"#1580fa"}}>
                            <ImShare style={{"fontSize":"18px"}}/> <label style={{"fontSize":"13px"}}>Share</label>
                            </div>
                        </div>
                        <div>
                            <label> <span className='fw-bold text-dark'>Spare Parts </span><span className='rounded-pill px-3 ms-2 text-white' style={{ "background": "#1580fa","fontSize":"13px" }}>Live</span></label>
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="keywords d-flex gap-3 mb-2 ms-2">
                        <li className='rounded-pill' style={{ "backgroundColor": "#ccc" }}>Product</li>
                        <li className='rounded-pill' style={{ "backgroundColor": "#ccc" }}>Product</li>
                        <li className='rounded-pill' style={{ "backgroundColor": "#ccc" }}>Agriculture</li>
                        <li className='rounded-pill' style={{ "backgroundColor": "#ccc" }}>Product</li>
                    </div>
                </div>
                <div className="right d-flex flex-column border">
                    <div className="clDate p-3"> <span className='fw-semibold text-dark'>Closing Date</span> 25 Feb 2023</div>
                    <div className="options d-flex flex-column align-items-center justify-content-center h-100 gap-3">
                        <button className='btn btn-primary Button fw-semibold' onClick={checkLogin}>Add to my deals</button>
                        <button className='btn btn-outline-primary' onClick={checkLogin} >Check Details</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card