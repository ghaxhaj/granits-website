import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles.css'

class NavBar extends React.Component {

    render(){
        return(
            <div className="navBar">
  
            <div>
                <NavLink to='/' className="navLink">Home</NavLink> 
            </div>
            <span></span>
            <div>
                <NavLink  to='/about' className = "navLink">About</NavLink> 
            </div>
            <span></span>
            <div>
                <NavLink to='/projects' className = "navLink">Projects</NavLink>
            </div>
            <span></span>
            <div>
                <NavLink to='/blogs' className = "navLink">Blogs</NavLink>
            </div>
            <span></span>
            <div>
                <NavLink to='/contact' className = "navLink">Contact</NavLink>
            </div>
        </div>
        )
    }
}

export default NavBar