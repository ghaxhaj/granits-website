import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    render(){
        return(
            <div className= "navBar">
  
            <div>
                <NavLink  to='/'>Home</NavLink> 
            </div>
            
            <div>
                <NavLink  to='/about'>About</NavLink> 
            </div>
        </div>
        )
    }
}

export default NavBar