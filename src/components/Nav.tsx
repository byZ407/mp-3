import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
    width: 30%;
    background-color: #282828;
    padding: 3vh;
    border-right: 5px solid darkgoldenrod;
    
    @media (max-width: 1000px) {
        width: 100%;
        border-right: none;
        border-bottom: 5px solid darkgoldenrod;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    text-align: center;
    padding: 0;
    margin: 0;
    justify-content: space-evenly;

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        list-style: none;
        padding: 0;
        margin: 0;
    }
`;

const StyledItem = styled.li`
    margin: 3vh auto;
    padding: 2vh 0;
    color: darkgray;
    font-size: calc(2px + 1.5vw);
    transition: background-color 0.2s;

    @media (max-width: 1000px) {
        margin: 1vh 1vw;
        padding: 1vh 2vw;
        font-size: calc(2px + 1.5vw);
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: darkgoldenrod;
    font-family: 'Della Respira', serif;
    transition: color 0.2s;
    &:hover {
        color: #e6c300;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledList>
                <StyledItem><StyledLink to="/">Home</StyledLink></StyledItem>
                <StyledItem><StyledLink to="/education">Education</StyledLink></StyledItem>
                <StyledItem><StyledLink to="/employment">Employment</StyledLink></StyledItem>
                <StyledItem><StyledLink to="/achievements">Achievements</StyledLink></StyledItem>
                <StyledItem><StyledLink to="/references">References</StyledLink></StyledItem>
                <StyledItem><StyledLink to="/projects">Projects</StyledLink></StyledItem>
            </StyledList>
        </StyledNav>
    );
}