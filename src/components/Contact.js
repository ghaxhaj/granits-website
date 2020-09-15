import React from "react"
import { init } from "emailjs"


class Contact extends React.Component{

    state = {
        name: "",
        number: "",
        email: "",
        message: ""
    }

    eventHandler = (event) => {
       this.setState({[event.target.name]: event.target.value})
    //    .then(console.log(this.state))
    }

    handleSubmit = (event) => {
      emailjs.send('ghaxhaj@fordham.edu', 'template_t3473fj', this.state)
      .then(console.log("Your Email has been Sent"))
    }

    render(){
        return(
            <div>
                {/* {console.log(this.state)} */}
                <script type="text/javascript"
                    src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js">
                </script>
                <script type="text/javascript">
                {function(){
                emailjs.init("user_IL9lr2nt8XPG23hR5A284");
                }}
                </script>

                <form>
                    Name: <input type="text" name="name" onChange = {this.eventHandler}></input><br></br>
                    Number: <input type="text" name="number" onChange = {this.eventHandler}></input><br></br>
                    E-Mail: <input type="email" name="email" onChange = {this.eventHandler}></input><br></br>
                    Message: <textarea type="text" name="message" onChange = {this.eventHandler}></textarea><br></br>
                    <button type = "submit" onClick = {this.handleSubmit}>Submit</button>
                    </form>
            </div>
        )
    }
}

export default Contact