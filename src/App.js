// import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import MoviePage from './components/MoviePage';
import './components/style.css'

function App() {
  return (
    <div className="App">
    {/* <MovieCard /> */}
    <MoviePage />
{/* 
    <Router>
      <Routes>
      <Route path="/movie/:movieId" element={<MoviePage />} />

      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
