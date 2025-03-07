import { styled } from "styled-components";

const EducationTitle = styled.h2`
  text-align: center;
  color: darkgoldenrod;
  font-size: calc(25px + 0.5vw);
  margin-top: 2vh;
  font-family: 'Della Respira', serif;
  font-weight: 400;
`;

const EducationDiv = styled.div`
`;

const SchoolSection = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 2vh 2vw;
  margin: 3vh 0;
  border: 3px solid darkgoldenrod;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1000px) {
    width: 90%;
    margin: 5vh auto;
    flex-direction: column;
    text-align: center;
  }
`;

const SchoolLogo = styled.div`
  width: 25%;

  img {
    max-width: 100%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 1vh auto;
  }
`;

const SchoolInfo = styled.div`
  width: 75%;
  padding-left: 2vw;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding-left: 0;
    align-self: center;
  }
`;

const SchoolName = styled.h3`
  font-family: 'Della Respira', serif;
  font-size: calc(20px + 0.5vw);
  color: darkgoldenrod;
  margin-bottom: 0.5vh;
`;

const SchoolDetails = styled.p`
  font-size: calc(13px + 0.3vw);
  color: #404040;
`;

export default function Education(){
    return (
        <>
            <EducationTitle >Education</EducationTitle>
            <EducationDiv>

                <SchoolSection>
                    <SchoolLogo>
                        <img src="/campus.png" alt="Campus Middle School Logo" />
                    </SchoolLogo>
                    <SchoolInfo className="school-info">
                        <SchoolName>Campus Middle School</SchoolName>
                        <SchoolDetails>Greenwood Village, Colorado</SchoolDetails>
                        <SchoolDetails>2018-2019</SchoolDetails>
                    </SchoolInfo>
                </SchoolSection>

                <SchoolSection>
                    <SchoolLogo>
                        <img src="/cherry-creek.jpg" alt="Cherry Creek High School Logo" />
                    </SchoolLogo>
                    <SchoolInfo>
                        <SchoolName>Cherry Creek High School</SchoolName>
                        <SchoolDetails>Greenwood Village, Colorado</SchoolDetails>
                        <SchoolDetails>2019-2023</SchoolDetails>
                    </SchoolInfo>
                </SchoolSection>

                <SchoolSection>
                    <SchoolLogo>
                        <img src="/boston-university.svg.png" alt="Boston University Logo" />
                    </SchoolLogo>
                    <SchoolInfo>
                        <SchoolName>Boston University</SchoolName>
                        <SchoolDetails>Boston, Massachusetts</SchoolDetails>
                        <SchoolDetails>2023-Present</SchoolDetails>
                    </SchoolInfo>
                </SchoolSection>
            </EducationDiv>
        </>
    );
};