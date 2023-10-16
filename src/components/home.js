import React from "react"
import ReactDom from "react-dom"
import vr from "../images/vr.png"
import  "../styles/home.css"
import { Outlet, Link } from "react-router-dom";


export default function Home(){


    return(
        <div className="container-fluid">
           <div className="vr-div">
           <div className="vr">
                <img src={vr}/>
            </div>
           </div>
            <div className="watch-div">
            <h1 className="watch">Watch Movies in virtual reality</h1>
            </div>
            <div className="download-div">
            <h1 className="download">Download and watch offline everywhere you are</h1>
            </div>
            <div className="btn-div">
                <Link to={"/watch"}><button className="btn btn-primary">Sign Up</button></Link>
                <Outlet/>
            </div>

            <div className="tabs">
                    <div className="indicator"></div>
                    <div className="non-indicator"></div>
                    <div className="non-indicator"></div>
            </div>


        </div>
    )
}