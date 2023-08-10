import React from 'react';
import './projectcard.css';
import {NavLink} from 'react-router-dom';
import { Badge } from '@mui/material';

const ProjectCard = ({pic,projectName,type,description,link,frontend,backend}) => {
  return (
    <div className='d-flex justify-content-center container'>
      <div className="card mt-5 ">
  <div className="row g-0 ">
    <div className="col-md-4 text-center">
      <img src={pic} className="img-fluid rounded-start imageclass" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title"><b>{projectName}</b></h5>
        <h6 className="card-title"><b>{type}</b></h6>
        <p className="card-text pt-3">{description}</p>
        <NavLink to={link} target='_blank'>
        <Badge  sx={{backgroundColor: "pink",borderRadius:"5px",color:"black"}} className='mx-2 px-2'>Check Out this project here</Badge>       
         </NavLink><br/>
         <NavLink to={frontend} target='_blank'>
        <Badge  sx={{backgroundColor: "pink",borderRadius:"5px",color:"black"}} className='mx-2 px-2'>Frontend Source Code </Badge>       
         </NavLink><br/>
         {backend ?
         <>
         <NavLink to={backend} target='_blank'>
        <Badge  sx={{backgroundColor: "pink",borderRadius:"5px",color:"black"}} className='mx-2 px-2'>Backend Source Code</Badge>       
         </NavLink><br/>
         </> : ""
         }
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default ProjectCard
