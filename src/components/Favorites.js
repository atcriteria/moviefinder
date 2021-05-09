import {connect} from 'react-redux';
import {MovieCard} from './MovieCard';

const Favorites = ({favorites}) => {
    return(
        <div>
            <h1>Faves</h1>
            {
                (favorites.length === 0) ? "" :
                favorites.map(fave => {
                    return (<MovieCard fave={fave} key={Math.random()} />)
                })
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        favorites: state.favorites
    }
}
export default connect(mapStateToProps)(Favorites)