import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color: #282828;
  color: #D3D3D3;
  padding: 2vh 2vw;
  text-align: center;
  border-top: 5px solid darkgoldenrod;
  transition: color 0.2s;
  font-size: calc(10px + 0.5vw);
`;

const StyledLink = styled(Link)`
  color: darkgoldenrod;
  text-decoration: none;
  &:hover {
    color: #e6c300;
  }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Yunzhe Bi <StyledLink to="">Credits</StyledLink> &copy;</p>
        </StyledFooter>
    );
}
