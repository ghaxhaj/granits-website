import React from "react"
import "../styles.css"
import Boxing from "../images/boxing.jpeg"
import Cycling from "../images/biking.jpeg"
import Eagle from "../images/albanian.jpeg"
import Computer from "../images/computer.jpeg"
import Knicks from "../images/knicks1.png"
import Exercise from "../images/exercise.png"
import Pokemon from "../images/pokemon.png"
import Cooking from "../images/cooking.png"

class About extends React.Component {

    render(){
        return(
            <div> 
                <div class="row">
                <div class="column">
                        <div class="card">
                            <img src = {Eagle} className = "cardImg"/>
                            <h1 className = "cardHeader">Albanian American</h1>
                            <p className = "cardText"> My ethnicity is very important to me. I am of Albanian decent, both my parents being immigrants from Kosovo.</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src = {Boxing} className = "cardImg"/>
                            <h1 className = "cardHeader">Boxing</h1>
                            <p className = "cardText"> One of my hobbies is boxing! I love the adrenaline and technicality of the sport. It is also one of the best workouts you could ask for.</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src = {Computer} className = "cardImg"/>
                            <h1 className = "cardHeader">Coding</h1>
                            <p className = "cardText">I love to code. Ever since I made the decision to start coding, I never looked back! I enjoy game development and making social media apps.</p>

                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src = {Cooking} className = "cardImg"/>
                            <h1 className = "cardHeader">Cooking</h1>
                            <p className = "cardText">Cooking is an important part of my life. I enjoy great food, but I enjoy it more if it comes from my hands. I specialize in Mediterranean food.</p>

                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src = {Cycling} className = "cardImg"/>
                            <h1 className = "cardHeader">Cycling</h1>
                            <p className = "cardText">I love to bike ride! Long bike rides through New York City make me feel free. It is a great way to stay active and get some fresh air.</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src = {Knicks} className = "cardImg"/>
                            <h1 className = "cardHeader">NBA Fan</h1>
                            <p className = "cardText">I am an avid Knicks fan! I've watched the NBA since I was 5 and absolutely love the sport of basketball and the Knicks... even though we stink.</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src = {Pokemon} className = "cardImg"/>
                            <h1 className = "cardHeader">Pokemon</h1>
                            <p className = "cardText">I enjoy gaming, but my favorite game of all time has to be Pokemon. I spent countless hours training my pokemon, competing online, and shiny hunting!</p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="card">
                            <img src = {Exercise} className = "cardImg"/>
                            <h1 className = "cardHeader">Working Out</h1>
                            <p className = "cardText">I believe that a fit life is a happy life. Working out helps keep me disciplined and healthy. Keeping my body in check helps keep my mind in check as well.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About 