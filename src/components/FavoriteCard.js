import {connect} from 'react-redux';
import {removeFavorite} from '../actions/index';

import styled from 'styled-components';

function FavoriteCard({movie, removeFavorite, setFaveCount}){

    const clickRemove = e => {
        setFaveCount(-1)
        e.preventDefault();
        removeFavorite(movie)
    }

    return(
        <Card>
            <CardHeader>{movie.Title} ({movie.Year})</CardHeader>
            <CardImg src={movie.Poster} alt={movie.Title + " movie poster"} />
            <CardButton onClick={clickRemove}>Remove Nomination</CardButton>
        </Card>
    )
}

const mapStateToProps = state => {
    return{
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, {removeFavorite})(FavoriteCard)

const Card = styled.div`
width: 25%;
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