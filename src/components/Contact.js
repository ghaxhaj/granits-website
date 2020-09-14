import React from "react"

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


    render(){
        return(
            <div>
                {/* {console.log(this.state)} */}
                <form action= "matildo:ghaxhaj@fordham.edu" method= "POST" enctype= "multipart/form-data">
                    Name: <input type="text" name="name" onChange = {this.eventHandler}></input><br></br>
                    Number: <input type="text" name="number" onChange = {this.eventHandler}></input><br></br>
                    E-Mail: <input type="text" name="email" onChange = {this.eventHandler}></input><br></br>
                    Message: <input type="textArea" name="message" onChange = {this.eventHandler}></input><br></br>
                    <input type="submit" name="submit" value="Submit"></input>
                    </form>
            </div>
        )
    }
}

export default Contact