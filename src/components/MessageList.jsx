import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MessageList = (props) => {
    const [message,setmessage]=useState([]);
    useEffect(()=>{
       axios.get('https://project-b1551-default-rtdb.asia-southeast1.firebasedatabase.app/data.json').then(res=>{
        console.log(res,"response from get");
         let list=[];
       
        for(let key in res.data){
            list.push(res.data[key]);
        }
        list.reverse();
        list=list.slice(0,5);
        setmessage(list);
       });
    },[props]);
    ////////////////////////////////////////////
        const handleSeeAll=()=>{
            axios.get('https://project-b1551-default-rtdb.asia-southeast1.firebasedatabase.app/data.json').then(res=>{
                 let list=[];
                for(let key in res.data){
                    list.push(res.data[key]);
                }
                list.reverse();
                setmessage(list);
            });
            document.querySelector('.seeall').style.display="none";
        };
    ////////////////////////////////////////
    return (
    <div  className='message-container'>
        {message.length>0 && message.map((item,i)=>{
       return <div key={i} className="card">
            <div className="username">{item.name}</div>
            <div className="usermessage">{item.message}</div>
        </div>
        })
        }
         <div className="seeall">
            <button onClick={handleSeeAll}>See All</button>
        </div>
    </div>
  )
}

export default MessageList