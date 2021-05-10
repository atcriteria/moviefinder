import styled from 'styled-components';

export default function Complete({showComplete}){
    const MainContain = styled.div`
    font-size: 2rem;
    /* Need the ternary otherwise the banner is visible when it shouldnt be */
    padding: ${(showComplete) ? "1%": "0"};
    background-color: green;
    `
    return(
        <MainContain>
            {(!showComplete) ? "" :
            <h1>! ~ You have 5 nominations ~ !</h1>
            }
        </MainContain>
    )
}
