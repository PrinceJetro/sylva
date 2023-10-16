import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Watch from './components/watch';
import MovieDetails from './components/moviedetails'; 
import Movie from './components/movie';

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/movie/:src" element={<MovieDetails />} />
        <Route path="/watchnow/:title" element={<Movie />} />

      </Routes>
    </Router>
  );
}

export default App;
