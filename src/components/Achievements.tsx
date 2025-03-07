import { styled } from "styled-components";

const AchievementsTitle = styled.h2`
  text-align: center;
  color: darkgoldenrod;
  font-size: calc(25px + 0.5vw);
  margin-top: 2vh;
  font-family: 'Della Respira', serif;
  font-weight: 400;
`;

const StyledAchievements = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2vh 1vw;
`;

const AchievementOdd = styled.div`
  padding: 3vh 2vw;
  margin: 1vh 0;
  border-left: 5px solid darkgoldenrod;
  text-align: left;

  h3 {
    font-size: calc(18px + 0.5vw);
    font-family: 'Della Respira', serif;
    color: darkgoldenrod;
    margin-bottom: 5px;
  }

  p {
    font-family: 'DM Serif Display', serif;
    font-size: calc(13px + 0.5vw);
    color: #303030;
  }
`;

const AchievementEven = styled.div`
  padding: 3vh 2vw;
  margin: 1vh 0;
  border-right: 5px solid darkgoldenrod;
  text-align: right;

  h3 {
    font-size: calc(18px + 0.5vw);
    font-family: 'Della Respira', serif;
    color: darkgoldenrod;
    margin-bottom: 5px;
  }

  p {
    font-family: 'DM Serif Display', serif;
    font-size: calc(13px + 0.5vw);
    color: #303030;
  }
`;

export default function Achievements() {
    return (
        <>
            <AchievementsTitle>Achievements</AchievementsTitle>
            <StyledAchievements>
                <AchievementOdd>
                    <h3>Developed a Mobile App with 10,000+ Downloads</h3>
                    <p>
                        Created a productivity app called "aLegitApp" that helps students manage deadlines and assignments. Featured on the Google Play Store.
                    </p>
                </AchievementOdd>

                <AchievementEven>
                    <h3>Certified Machine Learning Specialist</h3>
                    <p>
                        Issued by Coursera for completing the "Advanced Machine Learning Specialization."
                    </p>
                </AchievementEven>

                <AchievementOdd>
                    <h3>Published Research Paper in "A Real Journal of Technologies"</h3>
                    <p>
                        Co-authored a paper titled "This Is A Real Research Paper" during a summer research internship.
                    </p>
                </AchievementOdd>

                <AchievementEven>
                    <h3>Recipient of the "Best Web App Development Award"</h3>
                    <p>
                        Recognized for outstanding academic performance in CS391.
                    </p>
                </AchievementEven>

                <AchievementOdd>
                    <h3>Google IT Support Professional Certificate</h3>
                    <p>
                        Issued by Coursera for completing the "Google IT Support Professional" certification.
                    </p>
                </AchievementOdd>
            </StyledAchievements>
        </>
    );
};
