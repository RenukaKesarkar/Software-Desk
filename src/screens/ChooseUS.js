import React from 'react';
import './ChooseUs.css'

const ChooseUs=()=>{
    return(
        <div className="sol-container">
            <h2>Why <span>choose us?</span></h2>
            <p>Our relentless quest to achieve perfection keeps us one step ahead of many other service providers in this niche.</p>

           <div className="list-container">
           <div className='ch-img'>
                <img className="choose-img" src="../images/choose-box-01.png" />
                <h3>Expert Team</h3>
            </div>
            <div className='ch-img'>
                <img className="choose-img" src="../images/choose-box-02.png" />
                <h3>Ontime Delivery</h3>
            </div>
            <div className='ch-img'>
                <img className="choose-img" src="../images/choose-box-031.png" />
                <h3>Cost Effective</h3>
            </div>
            <div className='ch-img'>
                <img className="choose-img" src="../images/choose-box-04.png" />
                <h3>24*7 Support</h3>
            </div>
           </div>
        </div>
    )

}

export default ChooseUs;