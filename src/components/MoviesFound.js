import {connect} from 'react-redux'
import MovieCard from './MovieCard';
import styled from 'styled-components';
import checkIfFave from '../utils/checkIfFave';

export const MoviesFound = (props) => {
    const {data, favorites, setFaveCount} = props;

    return(
        <MovieContainer>
            {
                (data === undefined) ? "No Results..." :
                data.map(movie => {
                    let disabled = checkIfFave(favorites, movie);
                    return <MovieCard inFave={disabled} movie={movie} setFaveCount={setFaveCount} key={Math.random()} />
                })
            }
        </MovieContainer>
    )
}

const mapStateToProps = state => {
    return{
        data: state.data,
        favorites: state.favorites
    }
}
export default connect(mapStateToProps)(MoviesFound)

const MovieContainer = styled.div`
font-size: .8rem;
width: 40%;
margin: auto;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: space-around;
`