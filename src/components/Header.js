
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{boxShadow:"0 0 5px grey"}} >
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>VELKUR DHARANI</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{justifyContent:"end"}}>
      <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to={"/"}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/resume"}>Resume</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/projects'}>Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/contact"}>Contact Me</Link>
        </li>
       
 
      </ul>
    </div>
  </div>

</nav>
    </>
  )
}

export default Header