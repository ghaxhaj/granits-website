import React from "react"
import emailjs from 'emailjs-com';
import "../styles.css"


class Contact extends React.Component{

    state = {
        name: null,
        number: null,
        email: null,
        message: null,
        submitted: false
    }

    

    eventHandler = (event) => {
       this.setState({[event.target.name]: event.target.value})
    //    .then(console.log(this.state))
    }

    handleSubmit = (event) => {
    event.preventDefault()

    let userId = "user_IL9lr2nt8XPG23hR5A284"
    let template = "template_t3473fj"
    let email = "ghaxhaj@fordham.edu"
    
    if(this.state.name && this.state.number && this.state.email && this.state.message){
        emailjs.send(email, template, this.state, userId)
        .then(this.setState({submitted:true}))}
        
    else{
        alert("Please make sure all parts of the form are filled!")
      }
    }

    render(){
        return(
            <div>
                {this.state.submitted ? <h1 className = "completedFormText">Thanks, {this.state.name}! You will be contacted shortly!</h1> :
                <form className = "contactForm">
                    Name: <input className = "input" type="text" name="name" onChange = {this.eventHandler}/><br></br>
                    Number: <input className = "input" type="text" name="number" onChange = {this.eventHandler}/><br></br>
                    E-Mail: <input className = "input" type="email" name="email" onChange = {this.eventHandler}/><br></br>
                    Message: <textarea className = "messageInput" type="text" name="message" onChange = {this.eventHandler}/><br></br>
                    <button className = "formButton" type = "submit" onClick = {this.handleSubmit}>Submit</button>
                </form> }
            </div>
        )
    }
}

export default Contact