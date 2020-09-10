import React from "react"
import Photo from "../images/photo.jpeg"
import ThatsMe from "../images/thatsme.jpeg"
import Resume from "../FinalResume.pdf"
import "../styles.css"

class Home extends React.Component {
    
    state = {
        hovered: false
    }

    hoverOverName = () => {
        console.log("hi")
        this.setState(
            {hovered: true}
        )
    }

    render(){

        
        return(
            <div> 
                <img className = "homeImg" linkto= "/home" src={Photo}/>
                {this.state.hovered && <img className = "thatsMe" src={ThatsMe} />}
                <div className = "homeBio">
        <h1 className = "homeName" onMouseOver = {this.hoverOverName}>Granit Haxhaj</h1>
                    <p className = "homePar">Hi! My name is Granit and I am a full stack software engineer. My skills include,
                    but are not limited to, Ruby, Ruby on Rails, SQL, Vanilla Javascript, React.js, React Native, p5.js, Bootstrap, 
                    CSS, R, and building full CRUD applications. 
                    </p>
                </div>
                <a href={Resume} download>
                    <button className = "buttonResume">Download My Resume</button>
                </a>
            </div>
        )
    }
}

export default Home