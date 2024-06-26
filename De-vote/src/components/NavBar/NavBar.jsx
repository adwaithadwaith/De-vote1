import React from 'react'
import "./NavBar.css";
import { Link, Route, Routes } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navbar'>
        <div className='img'><img className='logo' src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3262425/how-to-vote-icon-sm.png" alt="" /></div>
        <div className='text'>
        <Routes>
          <Route path='/' element={<h4 className='admin'>
            <div style={{display:'inline-block'}} className='mr-10'>
            <Link className=' text-blue-800 font-semibold text-lg' to='/'>Voter</Link>
            </div >
            <div style={{display:'inline-block'}}>
            <Link className=' text-blue-800 font-semibold text-lg' to='/admin'>Admin</Link>
            </div >
            <div style={{display:'inline-block'}} className='ml-10'>
            <Link className=' text-blue-800 font-semibold text-lg' to='/pologin'>P.O</Link>
            </div>
            </h4>}>

        </Route>
            
            
          
        </Routes>
            
            <h1 className='devote font-bold text-2xl'>De-Vote</h1>
        </div>
    </div>
  )
}

export default NavBar
