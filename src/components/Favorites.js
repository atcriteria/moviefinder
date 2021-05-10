import {connect} from 'react-redux';
import FavoriteCard from './FavoriteCard';

const Favorites = ({favorites, setFaveCount}) => {

    return(
        <div>
            <h1>Faves</h1>
            {
                favorites.map(fave => {
                    if(fave === undefined || fave === null){
                        return ""
                    } else {
                        return (<FavoriteCard setFaveCount={setFaveCount} movie={fave} key={Math.random()} />)
                    }
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