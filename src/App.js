import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import MoviesFound from './components/MoviesFound';
import Favorites from './components/Favorites';
// import axios from 'axios';

function App() {
  // axios
  //   .get(`http://www.omdbapi.com/?s=five&y=2014&page=2&apikey=${process.env.REACT_APP_API_KEY}`)
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  return (
    <div className="App">
      <Header />
      <Search />
      <MoviesFound />
      <Favorites />
    </div>
  );
}

export default App;
