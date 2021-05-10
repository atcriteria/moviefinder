import './App.css';
import {connect} from 'react-redux'
import {useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import MoviesFound from './components/MoviesFound';
import Favorites from './components/Favorites';
import Complete from './components/Complete';

function App({favorites}) {
  const [count, setCount] = useState(favorites.length)
  const [showComplete, setShowComplete] = useState(false)
  console.log(count)

  if(count===5 && !showComplete){
    setShowComplete(!showComplete)
  }

  const setFaveCount = (num) => {
    let working = count + num;
    setCount(working)
  }

  return (
    <div className="App">
      <Header />
      <Complete showComplete={showComplete} />
      <Search />
      <MoviesFound setFaveCount={setFaveCount} />
      <Favorites setFaveCount={setFaveCount} />
    </div>
  );
}

const mapStateToProps = state => {
  return{
      favorites: state.favorites
  }
}
export default connect(mapStateToProps)(App)