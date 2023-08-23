import React from 'react'
// import profile from './images/user-pic.avif';
// import profile from './images/profile-pic2-PhotoRoom.png'
import profile from './images/profile-pic2-fotor-20230714123430.jpg';
import './home.css';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    let navigate=useNavigate();
  return (
    <>
      <div className='d-flex flex-wrap p-5 '>
        <div className='col col-12 col-sm-6 col-lg-5  text-center'>
        <img src={profile} className='image'/>
        </div>
        <div className='col p-3 col-12 col-sm-6 col-lg-5 '>
            <h1>Hi, I'm DHARANI</h1>
            <p >A graduate with a strong passion for coding. I am thrilled to embark on my professional journey as a developer and utilize my skills to create impactfull and visually stunning websites. </p>
            <Divider/>
            <div className='circle-container'>
              <div className='circle yellow'  onClick={()=>{navigate('/skills')}}>
                <div className='circle-text'>Skills</div>
              </div>
              <div className='circle blue'  onClick={()=>{navigate('/projects')}}>
                <div className='circle-text'>Projects</div>
              </div>
              <div className='circle red' onClick={()=>{navigate('/contact')}} >
                <div className='circle-text'>Contact</div>
              </div>
              
            </div>

        </div>
      </div>
    </>
  )
}

export default Home
