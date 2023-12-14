import { useState, createContext } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieList from "./Components/MovieList";
import MyNavbar from "./Components/MyNavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import AddMovie from "./Components/AddMovie";
import myMovies from "./movies";

export const MovieContext = createContext();

function App() {
  const [movies, setMovies] = useState(myMovies);
  const [count, setCount] = useState(movies.length);

  return (
    <MovieContext.Provider value={{ movies, setMovies, count, setCount }}>
      <MyNavbar />
      <AddMovie />
      <MovieList />
    </MovieContext.Provider>
  );
}

export default App;
