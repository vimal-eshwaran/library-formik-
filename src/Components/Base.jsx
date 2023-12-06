import React from 'react'
import '../App.css'
import {Link,useNavigate} from 'react-router-dom'

function Base({children}) {
  const history=useNavigate();
  return (
    <div className='base'>
    <div className='sidebar'>
      <ul >
        
        <li>
          <h1>
          <i class="bi bi-person-gear"></i>
          </h1>
          <span>ADMIN</span>
        </li>
        <li onClick={()=>{history("/")}}>
          <Link to='/' className='text-black'>Home</Link>
        </li>
        <li  onClick={()=>{history("/book")}}>
          <Link to="/book" className='link text-black'>Book</Link>
        </li>
        <li onClick={()=>{history("/author")}}>
          <Link to="/author" className=' link text-black'>Author</Link>
        </li>
      </ul>
    </div>
<div className='body'>
  
  <div>
    <div className='header'>
    <h1>Admin Dashboard</h1>
    </div>
    <div className='children'>
      {children}
    </div>
  </div>
  
</div>
    


    </div>
  )
}

export default Base