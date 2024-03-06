import React from 'react'
import { useState } from 'react';

export default function App() {
    
    let time = new Date().toLocaleTimeString();

    const [ctime,setctime] = useState(time);

    const updateTime = ()=>{
        let time = new Date().toLocaleTimeString();
        setctime(time);
    }

    setInterval(updateTime,1000);
  return (
    <>
     <h1>{ctime}</h1>
    </>
  )
}
