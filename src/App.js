import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import MoviesFound from './components/MoviesFound';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <MoviesFound />
      {/* <Favorites /> */}
    </div>
  );
}

export default App;
