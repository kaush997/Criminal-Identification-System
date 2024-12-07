import React from 'react'
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import './topicbox.css'
import { NavLink } from 'react-router-dom';


export default function TopicBox() {
  return (

    <div className="container" style={{paddingTop:"40px", paddingBottom: "40px"}}>
      <div className="row pb-5" >
  <div className="col-md-6 ">
    <div className="card " style={{height:"250px",backgroundColor:"rgb(224 225 252)",marginBottom:"30px"}}>
      <div className="card-body" style={{height:"auto"}}>
        <img src="assets/images/user.png" alt="" className='iconbox mt 3' />
        <h2 className='text-center mt-3'>User</h2>
        <NavLink to="/ITofficer"> <BsFillArrowRightSquareFill className="rightarrow " /></NavLink>
       

      </div>
    </div>
  </div>
  <div className="col-md-6 ">
    <div className="card " style={{height:"250px", backgroundColor:"rgb(224 225 252)",marginBottom:"30px"}}>
      <div className="card-body">
      <img src="assets/images/robber.png" alt="" className='iconbox mt 3)' />
        <h2 className='text-center mt-3'>Criminal</h2>
        <NavLink to="/Suspect"><BsFillArrowRightSquareFill className="rightarrow " /></NavLink>
        
        
      </div>
    </div>
  </div>
</div>

    </div>

  )
}
