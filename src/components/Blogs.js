import React from "react"
import "../styles.css"
import Medium from "../images/medium.png"

class Blogs extends React.Component{

    state = {
        blogs: []
    }

   componentDidMount(){
        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ghaxhaj')
        .then(resp => resp.json())
        .then(blogs => this.setState({blogs}))
   }

   renderBlogs = () => {
    
    if(this.state.blogs.items){
    return this.state.blogs.items.map(post => {
    
   return <div className="column">
        <div className="card">
            {post.thumbnail ? <img src = {post.thumbnail} className = "projectImg"/> : <img src = {Medium} className = "projectImg"/>}
            <h1 className = "cardHeader">{post.title}</h1>
    <p className = "cardText">Posted on: {post.pubDate}</p>
            <a href = {post.link} className = "projectLink">Read the Full Blog Here!</a>
        </div>
    </div>})
    }
   }

    render(){
        return(
            <div className="row">
                {console.log(this.state.blogs.items)}
                {this.renderBlogs()}
            </div>
        )
    }
}

export default Blogs