import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../styles/moviedetails.css";
import data from './data';
import play from "../images/play.png"
import { Link } from 'react-router-dom';


const MovieDetails = () => {
    const { src } = useParams();
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [plot, setPlot] = useState('');
    const [video, setVideo] = useState('');
    const [casts, setCasts] = useState([]);

    
    useEffect(() => {
      const all_index = data.length - 1;
  
      for (let i = 0; i <= all_index; i++) {
        if (data[i].name === src) {
          setImage(data[i].src);
          setTitle(data[i].name);
          setGenre(data[i].genre);
          setPlot(data[i].plot);
          setVideo(data[i].video);
          const c = data[i].casts;
          console.log(c);
          setCasts(
            c.map((item, index) => (
              <div className="cast" key={index}>
                <img src={item.image} alt="Cast" />
                <div className="name">
                  <p>{item.cast}</p>
                </div>
              </div>
            ))
          );
          break;
        }
      }
    }, [src]);

    const handleGoBack = () => {
        window.history.back(); // This will navigate back to the previous page in the browser's history.
      };
    
    return (
        <div className='container-fluid'>
            <div className="intro">
                <img src={image} alt="Selected Movie" />
                <div className='nav'>
                    <i className='fa fa-arrow-left' onClick={handleGoBack}></i>
                    <i className='fa fa-bars'></i>
                </div>

                <Link to={`/watchnow/${title}`}>
                <div className='play-div'>
                    <img src={play} alt='play'/>
                  </div>
               </Link>


            <div className='about'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <div className='more-div'>
                    <p className='genre'>{genre}</p>
                <div className='rating'>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star"></span>
                    <span class="fa fa-star"></span>
                    </div>
                    <p className='plot'>{plot}</p>
                </div>
                <hr/>
    
            </div>
        
        
        </div>


            <div className='casts'>
                <h1>CASTS</h1>
                <div className='cast-div'>
                    {casts}
                </div>
            </div>


    </div>
    );
  };
  
  export default MovieDetails;