import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2.5vh 3vw;
  background-color: #282828;
  border-bottom: 5px solid darkgoldenrod;
  text-align: left;
    
    
  @media (max-width: 1000px) {
      align-items: center;
  }   
`;

const StyledTitle = styled.h1`
    color: darkgoldenrod;
    font-size: 35px;
`;

const StyledSubtitle = styled.p`
  font-family: 'Cinzel', serif;
  font-size: 11px;
  margin: 0 9px;
  color: #D3D3D3;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle>Yunzhe Bi</StyledTitle>
            <StyledSubtitle>The Best Online Resume</StyledSubtitle>
        </StyledHeader>
    );
}