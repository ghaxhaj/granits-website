import React from "react"
import "../styles.css"
import nbaRef from "../images/nbaRef.png"
import FlatGram from "../images/flatGram.png"
import aMazeing from "../images/aMazeing.png"
import SoundLoud from "../images/SoundLoud.png"

class Projects extends React.Component {
    render(){
        return(
            <div>
                <div className="row">
                <div className="column">
                        <div className="card">
                            <img src = {nbaRef} className = "projectImg"/>
                            <h1 className = "cardHeader">NBA Reference</h1>
                            <p className = "cardText"> NBA Reference is an app that tracks all data from the 2019-20 NBA Season and allows for game simulations. </p>
                            <a href = "https://github.com/ghaxhaj/NBARef" className = "projectLink">Front-End Repository</a><br></br>
                            <a href = "https://github.com/ghaxhaj/NBARefBackEnd" className = "projectLink">Back-End Repository</a><br></br>
                            <a href = "https://vimeo.com/421127797" className = "projectLink">Demo</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src = {FlatGram} className = "projectImg"/>
                            <h1 className = "cardHeader">FlatGram</h1>
                            <p className = "cardText">FlatGram is a social media platform designed to keep Flatiron graduates connected on a social level. It possesses full CRUD capability.</p>
                            <a href = "https://github.com/ghaxhaj/flat-gram" className = "projectLink">Front-End Repository</a><br></br>
                            <a href = "https://github.com/sekoudosso82/flat-gram-back-end" className = "projectLink">Back-End Repository</a><br></br>
                            <a href = "https://vimeo.com/421127166" className = "projectLink">Demo</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src = {aMazeing} className = "projectImg"/>
                            <h1 className = "cardHeader">aMazeing</h1>
                            <p className = "cardText">aMazeing is a web game that auto-generates a maze and gives the user 35 seconds to solve it. It was created with the p5.js library.</p>
                            <a href = "https://github.com/ftodoroski/aMazeing/tree/Granit" className = "projectLink">Front-End Repository</a><br></br>
                            <a href = "https://vimeo.com/421125815" className = "projectLink">Demo</a>
                            <h1></h1>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <img src = {SoundLoud} className = "projectImg"/>
                            <h1 className = "cardHeader">SoundLoud</h1>
                            <p className = "cardText">SoundLoud is a music playlist creation website that allows users to save music videos to their profiles, and allows artists to post videos. It was created with Ruby and Ruby on Rails. </p>
                            <a href = "https://github.com/ghaxhaj/SoundLoud" className = "projectLink">Repository</a>
                            <h1></h1>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}

export default Projects