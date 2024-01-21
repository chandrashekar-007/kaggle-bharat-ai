import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:'center',height:"100vh",textAlign:"center",fontSize:"5rem"}}>Welcome to Home Page
    <NavLink to={"/login"}>
      <button style={{backgroundColor:"blue",padding:"0.8rem 1.6rem", alignText:"center", width:"fit-content",fontSize:"3rem"}}> Login </button>
    </NavLink></div>
   
    </>
    )
}
