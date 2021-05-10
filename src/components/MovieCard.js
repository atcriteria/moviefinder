import styled from 'styled-components';
import {connect} from 'react-redux';
import {addFavorite, removeFavorite} from '../actions/index';
import {useState} from 'react'

export const MovieCard = ({movie, favorites, addFavorite, inFave, removeFavorite, setFaveCount}) =>{
    const [disabled, setDisabled] = useState(inFave)

    const toggleDisabled = () => {
        setDisabled(!disabled)
    }

    const clickRemove = (e) => {
        e.preventDefault();
        toggleDisabled()
        setFaveCount(-1)
        removeFavorite(movie)
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
        setFaveCount(1)
        addFavorite(movie)
    }
    return(
        <Card>
            <CardHeader>{movie.Title} ({movie.Year})</CardHeader>
            <CardImg src={movie.Poster} alt={movie.Title + " movie poster"} />
            {
                (disabled) ? 
                <CardButton onClick={clickRemove} >Remove Nomination</CardButton> :
                <CardButton onClick={clickFavorites} disabled={disabled}>Nominate Movie</CardButton>
            }
        </Card>
    )
}

const mapStateToProps = state => {
    return{
        data: state.data,
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, {addFavorite, removeFavorite})(MovieCard)

const Card = styled.div`
width: 20%;
margin: 2.5% 2.5%;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: linear-gradient(to bottom, rgba(0,0,0,0), black);
font-family: Arial, Helvetica, sans-serif;
@media (max-width: 375px){
    width: 95%;
}
`

const CardHeader = styled.h3`
margin-top: 2.5%;
`

const CardImg = styled.img`
max-width:50%;
`

const CardButton = styled.button`
margin: 2.5% 0;
`