import React ,{useContext}from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData]=useContext(AuthContext)
  
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5  rounded'>
      <div className='bg-red-400 mb-2  py-2 px-4 flex justify-between rounded'>
        <h2 className='w-1/5 text-lg font-medium  '>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium  '>New task</h3>
        <h5 className='w-1/5 text-lg font-medium  '>Active Task</h5>
        <h5 className='w-1/5 text-lg font-medium  '>Completed</h5>
        <h5 className='w-1/5 text-lg font-medium  '>Failed</h5>
      </div>
      <div className=''>
      {userData.map(function(elem,idx){
        return <div key={idx} className='0 mb-2  py-2 px-4 flex justify-between rounded border-2 border-emerald-500'>
        <h2 className='text-lg font-medium w-1/5 '>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-600'>{elem.taskCounts.completed}</h5>
        <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
      </div>

      })}
      </div>
       
     
      
    </div>
  )
}

export default AllTask
