import styled from 'styled-components';
import {connect} from 'react-redux';
import {addFavorite} from '../actions/index';
import {useState} from 'react'

export const MovieCard = ({movie, favorites, addFavorite, inFave}) =>{
    const [disabled, setDisabled] = useState(inFave)

    const toggleDisabled = () => {
        setDisabled(!disabled)
    }

    const clickFavorites = e => {
        e.preventDefault();
        if(favorites.includes(movie)){
            alert("This movie is already in your favorites")
            return
        }
        if(favorites.length >= 5){
            alert("You have reached the maximum number of nominations! (5)\n See the Nominations pane to adjust your choices")
            return
        }
        toggleDisabled()
        addFavorite(movie)
    }

    return(
        <Card>
            <h3>{movie.Title} ({movie.Year})</h3>
            <CardImg src={movie.Poster} alt={movie.Title + " movie poster"} />
            <CardButton onClick={clickFavorites} disabled={disabled}>+ Favorites</CardButton>
        </Card>
    )
}

const mapStateToProps = state => {
    return{
        data: state.data,
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, {addFavorite})(MovieCard)

const Card = styled.div`
width: 20%;
height: 500px;
margin: 2.5% 2.5%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: linear-gradient(to bottom, rgba(0,0,0,0), black);
@media (max-width: 375px){
    width: 95%;
}
`

const CardImg = styled.img`
width:80%;
`

const CardButton = styled.button`
margin: 2.5% 0;
`