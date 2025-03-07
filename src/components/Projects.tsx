import styled from 'styled-components';
import Calculator from './Calculator/Calculator';


const ProjectsTitle = styled.h2`
  text-align: center;
  color: darkgoldenrod;
  font-size: calc(25px + 0.5vw);
  margin-top: 2vh;
  font-family: 'Della Respira', serif;
  font-weight: 400;
`;

export default function Projects() {
    return (
        <>
            <ProjectsTitle>Projects</ProjectsTitle>
            <Calculator />
        </>
    );
}