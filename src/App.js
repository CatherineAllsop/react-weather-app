import Search from "./Search";
import './App.css';
import cloudy from "./cloudy.png";
import bootstrap from "bootstrap";

function App() {
  return (
  <div className="App">
  <div className="weatherAppWrapper">  
    <img
      className="headerImage"
      src= {cloudy}
      alt="today's weather in your location"
    />
    <br />
    <h1>London</h1>
    <Search />
    <div className="openSource"> 
  <a href="https://github.com/CatherineAllsop/react-weather-app.git" target="_blank" rel="noreferrer">Open-source code</a> by Catherine Allsop
  </div>
  </div>
  </div>
  );
}

export default App;
