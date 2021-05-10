import {connect} from 'react-redux';
import {removeFavorite} from '../actions/index';

function FavoriteCard({movie, removeFavorite, setFaveCount}){

    const clickRemove = e => {
        setFaveCount(-1)
        console.log("clickremove called")
        e.preventDefault();
        removeFavorite(movie)
    }

    return(
        <div>
            <h3>{movie.Title} ({movie.Year})</h3>
            <button onClick={clickRemove}>Remove Nomination</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        favorites: state.favorites
    }
}
export default connect(mapStateToProps, {removeFavorite})(FavoriteCard)