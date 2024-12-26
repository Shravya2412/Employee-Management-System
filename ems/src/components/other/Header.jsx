import React,{useState,useEffect} from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  
const username=props.data?props.data.firstName:'Admin'
  const logOutUser=()=>{
localStorage.setItem('loggedInUser','')
props.changeUser('')
console.log(props.changeUser)
// window.location.reload()
  }

  
  
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">Hello <br /> <span className="text-3xl font-semibold">{username} 👋</span> </h1>
      <button onClick={logOutUser}  className="bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm">Log Out</button>
    </div>
  )
}

export default Header
