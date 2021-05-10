import './App.css';
import {connect} from 'react-redux'
import {useState} from 'react';
import Header from './components/Header';
import Search from './components/Search';
import MoviesFound from './components/MoviesFound';
import Favorites from './components/Favorites';
import Complete from './components/Complete';
import styled from 'styled-components';

function App({favorites}) {
  const [count, setCount] = useState(favorites.length)
  const [showComplete, setShowComplete] = useState(false)

  if(count===5 && !showComplete){
    setShowComplete(true)
  }
  if (count < 5 && showComplete){
    setShowComplete(false)
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
      <Section>
        <MoviesFound setFaveCount={setFaveCount} />
        <Favorites setFaveCount={setFaveCount} />
      </Section>
    </div>
  );
}

const mapStateToProps = state => {
  return{
      favorites: state.favorites
  }
}
export default connect(mapStateToProps)(App)

const Section = styled.section`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`