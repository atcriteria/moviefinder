import styled from 'styled-components';

export default function Header(){
    return(
        <MainContain>
            <Head>
                The Shoppies~!
            </Head>
            <h4>Search for and nominate films that you feel deserve special recognition!</h4>
        </MainContain>
    )
}

const MainContain = styled.div`
padding: 1%;
margin: auto;
background-color: lightgreen;
`

const Head = styled.h1`
font-size: 4.8rem;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`