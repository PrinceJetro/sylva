import React from "react"
import { useState } from "react"
import ReactDom from "react-dom"
import  "../styles/watch.css"
import New from "./new"
import data from "./data"
import Nav from "./nav"
import { Link } from "react-router-dom"


export default function Watch(){
    const [searchValue, setSearchValue] = useState('');
    const [redirectToMovie, setRedirectToMovie] = useState(null);

    function handleRedirect(event) {
        for (let i = 0;i< data.length -1 ; i++){
            console.log(event.target.value)
            if (event.target.value.length == 4){

            
            if (data[i].name.toUpperCase().includes(event.target.value.toUpperCase())) {
                console.log(`"${event.target.value}" is found in the string.`);
                 window.location.href = `/movie/${data[i].name}`;
                break;
              } else {
                console.log(`"${event.target.value}" is not found in the string.`);
              }
            }
        }
        // window.location.href = `/movie/${event.value}`; // Replace '/new-page' with the URL you want to navigate to
      }
      
    return(
        <div className="container-fluid">

            <div className="watch-div">
                <h1>What would you like to watch?</h1>
            </div>
 
            <div className="search-div">
                    <div id="search-bar">
            <i id="search-icon" className="fa fa-search"></i>
        <input id="search-input" placeholder="Search" onInput={handleRedirect}/>
        <i id="mic-icon" className="fa fa-microphone"></i>
        </div>
  
            </div>

              <div className="new-movies">
                <h1>New Movies</h1>
                <div className="container">
                {data.slice(0, 9).map((item, index) => (
                 <Link to={`/movie/${item.name}`} key={index}>
                    <New  img={item.src} key={index}/>
                </Link>
                    ))} 

                </div>
            </div>

            <div className="upcoming-movies">
            <h1>Upcoming Movies</h1>
            <div className="container">
                {data.slice(9).map((item, index) => (
                 <Link to={`/movie/${item.name}`} key={index}>
                 <New  img={item.src} key={index}/>
             </Link>                         ))} 

                </div>

            </div>


            <Nav/>

        </div>
    )
}