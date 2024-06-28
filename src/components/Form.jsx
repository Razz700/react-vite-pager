import axios from "axios";
import React, { useState } from "react";

const Form = ({output}) => {
const [name, setname] = useState('');
const [message, setmessage] = useState('');

const handleName = (e) => setname(e.target.value);
const handleMessage = (e) => setmessage(e.target.value);

const handleSubmit =async (e) => {
  e.preventDefault();
  const formName=name.trim();
  const formMessage=message.trim();
  if (formName=='' || formMessage=='') {
    alert('Please fill all required fields!!');
    return;
  }
  if (formName.length<3) {
    alert('Name should be atleast 3 characters!!');
    return;
  }
  if (formMessage.length<10) {
    alert('Message should be atleast 10 characters!!');
    return;
  }
  const response=await axios.post('https://project-b1551-default-rtdb.asia-southeast1.firebasedatabase.app/data.json',{
    name:name,
    message:message
  });
  setname('');
  setmessage('');
  console.log(response,"response from post");
output((out)=>!out);
};


  return (
    <div className="form-container">
      <form>
        <div className="form-header">Send Message Anonymously</div>
        <div className="form-input">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>

          <input
            type="text"
            placeholder="john doe"
            onChange={handleName}
            value={name}
          />
        </div>
        <div className="form-input">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
</svg>

          <input
            type="text"
            placeholder="Your message"
            onChange={handleMessage}
            value={message}
          />
        </div>
        <div className="form-btn">
          <button onClick={handleSubmit}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
