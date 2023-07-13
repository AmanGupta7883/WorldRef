import React from 'react'
import styled from 'styled-components'

const Notification = () => {

    const Wrapper = styled.section`
    background:url("https://worldref.co/wp-content/uploads/2023/03/Launching-Strip-for-Home-page.png");
    color:white;
    box-shadow: 0 0 12px #00000024;
    `
    return (
        <>
            <Wrapper className='text-center p-3 px-5 d-flex align-items-center justify-content-between'>
                <div>
                    <label className='fs-5 text-light'><b>Refer & Earn-</b> Start Industrial Trading With WorldRef</label>
                </div>
                <div className="button">
                    <button className='btn btn-light fw-semibold px-5'>Refer & Earn</button>
                </div>
            </Wrapper>
        </>
    )
}

export default Notification