import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [from_name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if(from_name==""||email==""||message==""){
        toast.error("Empty fields are not allowed");
    } else if(!email.includes("@")){
        toast.error("Please enter a valid email")
    } else {
        emailjs.send(
            "service_b35tj2g",
            "template_iib8xp8",
            {
                from_name:from_name,
                to_name:"Dharani",
                from_email:email,
                to_email:"dharanivelkur@gmail.com",
                message:message
            },
            "psrZqBG5o5Guo116H"
        );
        toast.success("Submitted Successfully!!!!");
        setName("");
        setEmail("");
        setMessage("");
    }

  };

  return (
    <>
    <div className="d-flex justify-content-center align-items-center pt-5">
            <span className="list"></span>&nbsp;&nbsp;
            <h1 style={{ margin: 0, fontSize: "35px", fontWeight: "bolder" }}>
              CONTACT ME
            </h1>
          </div>
    <Box sx={{ maxWidth: 400, margin: '0 auto' }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          value={from_name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Message"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" >
          Submit
        </Button>
      </form>
    </Box>
    <ToastContainer/>
    </>
  );
};

export default Contact;

