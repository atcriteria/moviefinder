import {connect} from 'react-redux';
import FavoriteCard from './FavoriteCard';

import styled from 'styled-components';

const Favorites = ({favorites, setFaveCount}) => {

    return(
        <FaveContainer>
            <Header>Nominated Films</Header>
            <CardContainer>
                {
                    favorites.map(fave => {
                        if(fave === undefined || fave === null){
                            return ""
                        } else {
                            return (<FavoriteCard setFaveCount={setFaveCount} movie={fave} key={Math.random()} />)
                        }
                    })
                }
            </CardContainer>
        </FaveContainer>
    )
}

const mapStateToProps = state => {
    return{
        favorites: state.favorites
    }
}
export default connect(mapStateToProps)(Favorites)

const FaveContainer = styled.div`
font-size: .8rem;
width: 40%;
margin: auto;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`

const CardContainer = styled.div`
width: 100%;
min-height: 600px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
`

const Header = styled.h1`
width: 100%;
`