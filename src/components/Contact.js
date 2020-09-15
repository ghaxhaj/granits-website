import React from "react"
import emailjs from 'emailjs-com';
import "../styles.css"


class Contact extends React.Component{

    state = {
        name: "",
        number: "",
        email: "",
        message: "",
        submitted: false
    }

    eventHandler = (event) => {
       this.setState({[event.target.name]: event.target.value})
    //    .then(console.log(this.state))
    }

    handleSubmit = (event) => {
      event.preventDefault()
      emailjs.send('ghaxhaj@fordham.edu', 'template_t3473fj', this.state, "user_IL9lr2nt8XPG23hR5A284")
      .then(this.setState({submitted:true}))
    }

    render(){
        return(
            <div>
                {this.state.submitted ? <h1>Thank You! I will contact you shortly!</h1> :
                <form>
                    Name: <input type="text" name="name" onChange = {this.eventHandler}></input><br></br>
                    Number: <input type="text" name="number" onChange = {this.eventHandler}></input><br></br>
                    E-Mail: <input type="email" name="email" onChange = {this.eventHandler}></input><br></br>
                    Message: <textarea type="text" name="message" onChange = {this.eventHandler}></textarea><br></br>
                    <button type = "submit" onClick = {this.handleSubmit}>Submit</button>
                </form> }
            </div>
        )
    }
}

export default Contact