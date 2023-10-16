import React from "react"
import ReactDom from "react-dom"
import  "../styles/new.css"
import extra from "../images/extraction.png"



export default function New(props){
    return(
        <div className="movie">
            <img src={props.img}/>
        </div>
    )
}