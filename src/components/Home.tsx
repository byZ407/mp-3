import { styled } from "styled-components";



const HomeTitle = styled.h2`
  text-align: center;
  color: darkgoldenrod;
  font-size: calc(25px + 0.5vw);
  margin-top: 2vh;
  font-family: 'Della Respira', serif;
  font-weight: 400;
`;

const StyledHome = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2vh 2vw;
  align-items: center;

  @media screen and (max-width: 1000px) {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
  }
`;

const HomeImage = styled.div`
  width: 40%;
  margin: 5vh 1vw;

  @media screen and (max-width: 1000px) {
    max-width: 40%;
    margin: 3vh auto;
    padding-bottom: 2vh;
  }
`;

const ProfileImage = styled.img`
  max-width: 100%;
    
  @media screen and (max-width: 1000px) {  
      max-width: 100%;
  } 
`;

const HomeText = styled.div`
  align-self: center;
  width: 60%;
  font-family: 'DM Serif Display', serif;
  font-size: calc(10px + 0.5vw);
  background-color: #fff;
  border: 3px solid darkgoldenrod;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  padding: 2vh 2vw;

  @media screen and (max-width: 1000px) {
    width: 100%;
    padding: 5vh 3vw;
    font-size: calc(15px + 0.5vw);
  }
`;

const WebsiteIntro = styled.p`
  font-size: calc(12px + 0.5vw);
  padding: 3vh 2vw;

  @media screen and (max-width: 1000px) {
    width: 100%;
    align-self: center;
    font-size: calc(15px + 0.5vw);
    padding: 5vh 0;
  }
`;

export default function Home() {
    return (
        <>
            <HomeTitle>Home</HomeTitle>
            <StyledHome>
                <HomeImage>
                    <ProfileImage id="profile-image" src="/photo.png" alt="Yunzhe Bi" />
                </HomeImage>
                <HomeText>
                    <p>
                        I’m Yunzhe Bi, a passionate and driven Computer Science student at Boston University. I’ve
                        immersed myself in the dynamic world of software development, exploring areas like machine
                        learning, web development, and algorithm design. My coursework and hands-on projects have
                        sharpened my proficiency in Python, Java, and JavaScript, while extracurricular collaborations
                        have honed my teamwork and adaptability. Eager to innovate and grow, I’m actively seeking
                        job and research opportunities to leverage my skills in impactful ways.
                    </p>
                </HomeText>
            </StyledHome>
            <WebsiteIntro>
                On this website, you’ll find a comprehensive overview of my <strong><u>educational history</u></strong>,
                <strong><u>technical projects</u></strong>, <strong><u>achievements and certifications</u></strong>,
                as well as other information showcasing my journey.
            </WebsiteIntro>
        </>
    );
};