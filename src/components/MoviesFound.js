import {connect} from 'react-redux'

export const MoviesFound = ({data}) => {
    console.log(data)
    return(
        <div>
            Found Movies Here
        </div>
    )
}

const mapStateToProps = state => {
    return{
        data: state.data
    }
}
export default connect(mapStateToProps)(MoviesFound)