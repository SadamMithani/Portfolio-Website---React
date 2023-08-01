import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/Components/home/home';
import About from '../src/Components/about/about';
import Service from '../src/Components/service/service';
import Skills from '../src/Components/skills/skills';
import Teams from '../src/Components/teams/teams';
import Contact from '../src/Components/contact/contact';
import Footer from '../src/Components/footer/footer';
import Navbar from '../src/Components/navbar/navbar'

function App() {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ce1c659f10msh17eeee2084ea453p11e484jsn673b3e34a39b',
          'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        } 
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Assuming the API response is in JSON format
        setMovieData(result.d); // Assuming the relevant data is under the 'd' property of the result
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
      {/* Display movie data */}
      <ul>
        {movieData.map((movie) => (
          <li key={movie.id}>{movie.l}</li>
        ))}
      </ul>
      
      {/* Render other components */}
      <Navbar path="/home" component={Home} />
      <Home path="/home" component={Home} />
      <About path="/about" component={About} />
      <Service path="/service" component={Service} />
      <Skills path="/skills" component={Skills} />
      <Teams path="/teams" component={Teams} />
      <Contact path="/contact" component={Contact} />
      <Footer path="/footer" component={Footer} />
    </div>
    </BrowserRouter>
  );
}

export default App;