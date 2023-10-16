import React, { useState, useEffect } from 'react';
import { ReactDOM } from "react";
import "../styles/movie.css"
import { useParams } from "react-router-dom";
import data from './data';

export default function Movie(){
    const { title } = useParams();
    const [link, setLink] = useState("")

    function back(){
        window.history.back()
    }
    useEffect(()=> {
        const all_index = data.length - 1;
        for (let i = 0; i <= all_index; i++) {
          if (data[i].name === title) {
            setLink(data[i].video);
            console.log(data[i].name)
            break;
          }
        }
        const iframe = document.getElementById('only-video');

    // Check if the browser supports the Fullscreen API
    if (iframe && iframe.requestFullscreen) {
      iframe.requestFullscreen()
        .then(() => {
          // Full screen has been activated
        })
        .catch((error) => {
          console.error('Fullscreen request failed:', error);
        });
    }
    }, [link])

    return(
        <div class="video-container" id="video-container">
            <h1 className='movie-title'>{title.toUpperCase()}</h1>
        <i class="fa fa-close" id="close" onClick={back}></i>
        <iframe controls src={link} id="only-video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        </div>
    )
}