import { styled } from "styled-components";

const EmploymentTitle = styled.h2`
  text-align: center;
  color: darkgoldenrod;
  font-size: calc(25px + 0.5vw);
  margin-top: 2vh;
  font-family: 'Della Respira', serif;
  font-weight: 400;
`;

const StyledJob = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vh 1vw;
  gap: 3vh;

  @media screen and (max-width: 1000px) {
    gap: 6vh;
  }
`;

const Job = styled.div`
  background-color: #fff;
  padding: 2vh 2vw;
  border-left: 5px solid darkgoldenrod;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1000px) {
    font-size: calc(2px + 3vw);
    padding: 7vh 20px;
  }
`;

const JobTitle = styled.h3`
  font-family: 'Della Respira', serif;
  font-size: calc(20px + 0.5vw);
  color: darkgoldenrod;
  margin-bottom: 5px;
`;

const CompanyAndTime = styled.p`
  font-family: 'DM Serif Display', serif;
  font-size: calc(13px + 0.3vw);
  font-style: italic;
  color: #6b6b6b;
`;

const JobDescription = styled.p`
  font-family: 'DM Serif Display', serif;
  margin-top: 5px;
  font-size: calc(15px + 0.5vw);
`;

export default function Employment() {
    return (
        <>
            <EmploymentTitle>Employment</EmploymentTitle>
            <StyledJob>
                <Job>
                    <JobTitle>Game Development Intern</JobTitle>
                    <CompanyAndTime>
                        Ubisoft (Summer 2023)
                    </CompanyAndTime>
                    <JobDescription>
                        Worked on the development of a new multiplayer game feature using Unity and C#. Optimized game physics and rendering performance. Collaborated with a team of designers and artists to ensure a seamless user experience.
                    </JobDescription>
                </Job>

                <Job>
                    <JobTitle>IT Support Specialist</JobTitle>
                    <CompanyAndTime>
                        FakeTech Co. (Winter 2023)
                    </CompanyAndTime>
                    <JobDescription>
                        Provided technical support to students and faculty, troubleshooting hardware and software issues. Assisted in maintaining the university’s network infrastructure and ensuring data security.
                    </JobDescription>
                </Job>

                <Job>
                    <JobTitle>AI Research Assistant</JobTitle>
                    <CompanyAndTime>
                        FakeAI Labs (Summer 2024)
                    </CompanyAndTime>
                    <JobDescription>
                        Researched and implemented reinforcement learning algorithms for autonomous robotics systems. Published findings in an internal company journal and presented at a team-wide conference.
                    </JobDescription>
                </Job>
            </StyledJob>
        </>
    );
};