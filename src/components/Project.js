import React from 'react'
import ProjectCard from './ProjectCard';
import capstonepic from './images/capstonepic.png';
import amazonpic from './images/amazon.jpg';
import equipmentpic from './images/equipments.jpg';
import tictactoepic from './images/tictactoe.jpg';
import moviespic from './images/movies.jpg';
import stopwatchpic from './images/stopwatch.jpg';
import dictionarypic from './images/dictionary.jpg';
import nationalitypic from './images/nationality.png';
import chatimage from './images/chatimage.png';
import UpArrowButton from './UpArrowButton';
import wordleimage from "./images/wordle.jpg";
const Project = () => {
    const projects=[
        {
            image:capstonepic,
            projectName:"Daily Dress Color Suggestions For Women",
            type:"Full Stack Project",
            description:"This project is created to get the users wardrobe color collection and provide daily dress suggestion. This project uses react, bootstrap, materialUI for frontend, nodejs for backend and mongoDB for database and AWS S3 for storage purpose.",
            link:"https://capstone-frontend-plum.vercel.app/dashboard",
            frontend:"https://github.com/DharaniVelkur/capstone-frontend",
            backend:"https://github.com/DharaniVelkur/capstone-backend"
        },
        {
          image:chatimage,
          projectName:"Realtime Chat App",
          type:"Full Stack Project",
          description:"A real-time chat application is a dynamic and interactive digital tool that empowers users to engage in live conversations.This project uses react for frontend, nodejs for backend and socket.io for real time chat.",
          link:"https://chat-frontend-henna.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/chat-frontend",
          backend:"https://github.com/DharaniVelkur/chat-backend"
        },
        {
          image:nationalitypic,
          projectName:"Predict the nationality of name",
          type:"Front end Project",
          description:"This is about when user enters some person's name, it generates top 2 countries for that entered name with their probabilities. This project uses javascript,html,css,bootstrap for frontend and it is fully responsive.",
          link:"https://fantastic-puffpuff-f906ac.netlify.app/",
          frontend:"https://github.com/DharaniVelkur/firstwebcode"
        },
        {
          image:wordleimage,
          projectName:"Wordle",
          type:"Frontend Project",
          description:"This project uses react and pure css and it is fully responsive.",
          link:"https://wordle-eight-orpin.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/wordle"
        },
        {
          image:amazonpic,
          projectName:"Basic e-Commerce website",
          type:"Full Stack Project",
          description:" This project is a responsive e-commerce website, has an efficient shopping cart system that enables customers to add,remove,update items easily.This project uses react, bootstrap, materialUI for frontend, nodejs for backend, mongoDB for database.",
          link:"https://amazonclone-frontend.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/amazonclone-frontend",
          backend:"https://github.com/DharaniVelkur/amazonclone-backend"
        },
        {
          image:equipmentpic,
          projectName:"Equipment Rental Portal",
          type:"Full Stack Project",
          description:"This project is a fully responsive equipment rental portal, which has equipments given for rent from particular date to particular date, Also has razorpay test mode.This project uses react, bootstrap for frontend, nodejs for backend, mongoDB for database.",
          link: "https://erp-frontend-one.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/ERP-frontend",
          backend:"https://github.com/DharaniVelkur/ERP-backend"
        },
        {
          image: moviespic,
          projectName:"Movies App",
          type:"Front end Project",
          description:"This project uses react,bootstrap for frontend and it is fully responsive.Also it has contact form in which others can contact me directly because of usage of nodemailer in project.",
          link:"https://movieapp-blue.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/movieapp"
        },
        {
          image:dictionarypic,
          projectName:"Simple Dictionary",
          type:"Front end Project",
          description:"This is about when a user enters a word, user gets appropriate meaning and synonyms,antonyms etc. This project uses javascript,html,css,bootstrap for frontend and it is fully responsive.",
          link:"https://dictionary-virid.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/dictionary"
        },
        {
          image:tictactoepic,
          projectName:'Tictactoe',
          type:"Front end Project",
          description:"This project uses react,bootstrap for frontend and it is fully responsive.",
          link:"https://tictactoe-alpha-umber.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/tictactoe"
        },
      
        {
          image:stopwatchpic,
          projectName:"Stop watch",
          type:"Front end Project",
          description:"This project uses javascript,html,css,bootstrap for frontend and it is fully responsive.",
          link:"https://stopwatch-iota-three.vercel.app/",
          frontend:"https://github.com/DharaniVelkur/stopwatch"
        }

    ]
  return (
    <>
    <div className="d-flex  align-items-center justify-content-center pt-5">
            <span className="list"></span>&nbsp;&nbsp;
            <h1 style={{ margin: 0, fontSize: "35px", fontWeight: "bolder" }}>
              Projects
            </h1>
    </div>
    {projects.map(e=>
 <ProjectCard pic={e.image} projectName={e.projectName} type={e.type} description={e.description} link={e.link} frontend={e.frontend} backend={e.backend}/>
    )}
    <br/>
    <div className='text-center 'style={{background:"pink"}}>Check out here for other projects.<a href='https://github.com/DharaniVelkur?tab=repositories' target='_blank'>GITHUB LINK</a></div>
    <UpArrowButton/>
    </>
  )
}

export default Project;
