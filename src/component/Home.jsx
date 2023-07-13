import React from 'react'
import Card from './Card'
import { HiFilter, HiSearch } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const token = localStorage.getItem("token");
    const nav = useNavigate();
    return (
        <>
            <div className="container mt-3 w-100">
                <div className="search d-flex align-items-center gap-3">
                    <label className='fs-5 fw-bold w-25'>Request for Quotation</label>
                    <div className='d-flex align-items-center w-100'>
                        <input type="search" className='border p-1 px-3 w-100' style={{ "borderRadius": "8px 0 0 8px", "outline": "none" }} placeholder='I can provide' />
                        <button className="btn btn-primary rounded-end border-0 d-flex align-items-center gap-2" style={{ "fontSize": "15px", "borderRadius": "0 8px 8px 0", "padding": "5.5px 10px" }}><HiSearch style={{ "color": "white" }} /> Search</button>
                    </div>
                </div>
            </div>
            <div className='d-flex container justify-content-between'>
                <div className="searchResult fw-bold mt-3 ms-0" style={{ "width": "auto" }}><span className='fw-semibold' style={{ "color": "#1580fa" }}>1008 </span>Buying Results from 500 Buyers</div>
                {
                    (token) ? <button className='btn btn-outline-primary mt-3 fw-bold' style={{ "borderRadius": "3px", "padding": "0.3rem 0.8rem", "fontSize": "13px" }}>+ Update Preferences</button> : console.log()
                }
            </div>
            <div className="container mt-3 d-flex gap-3 align-items-center">
                <HiFilter style={{ "color": "#1580fa" }} />
                <div>
                    <input type="radio" defaultChecked /><label className='ps-2 fw-semibold'>All</label>
                </div>
                {
                    (token) ?
                        <><input type='radio' /><label className='fw-semibold'>RFQ's Matching My Preference</label></>
                        : <div>
                            <button className='btn btn-primary' style={{ "borderRadius": "8px", "padding": "0.3rem 0.8rem" }} onClick={() => nav('/login')}>Log in/Sign up to see matching RFQ's</button>
                        </div>
                }
            </div>
            <div className='d-flex flex-column gap-3 my-3 align-items-center w-100'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home