import { styled } from "styled-components";

const ReferencesTitle = styled.h2`
  text-align: center;
  color: darkgoldenrod;
  font-size: calc(25px + 0.5vw);
  margin: 2vh 0;
  font-family: 'Della Respira', serif;
  font-weight: 400;
`;

const StyledReferences = styled.div`
`;

const ReferencesSection = styled.div`
  padding: 2vh 2vw;
  margin-bottom: 2vh;
  text-align: center;

  @media screen and (max-width: 1000px) {
    padding: 5vh 2vw;
  }
`;

const SectionTitle = styled.h3`
  color: darkgoldenrod;
  font-size: calc(17px + 0.5vw);
  font-family: 'Della Respira', serif;
  margin-bottom: 1vh;
  font-weight: 500;

  @media screen and (max-width: 1000px) {
    margin-bottom: 2vh;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    width: 80%;
  }
`;

const TableHeader = styled.th`
  border: 1px solid darkgoldenrod;
  padding: 20px;
  text-align: center;
  font-size: calc(12px + 0.5vw);
  background-color: #282828;
  color: darkgoldenrod;
  font-family: 'Cinzel', serif;
`;

const TableData = styled.td`
  border: 1px solid darkgoldenrod;
  padding: 20px;
  text-align: center;
  font-size: calc(12px + 0.5vw);
  background-color: #F5F5F5;
  color: #404040;
`;

export default function References(){
    return (
        <>
            <ReferencesTitle>References</ReferencesTitle>
            <StyledReferences>
                <ReferencesSection>
                    <SectionTitle>Professional</SectionTitle>
                    <StyledTable>
                        <thead>
                        <tr>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Position</TableHeader>
                            <TableHeader>Contact</TableHeader>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <TableData>Mr. X</TableData>
                            <TableData>Project Manager</TableData>
                            <TableData>(989) 829-9158</TableData>
                        </tr>
                        <tr>
                            <TableData>Ms. Y</TableData>
                            <TableData>Colleague</TableData>
                            <TableData>(200) 873-0935</TableData>
                        </tr>
                        </tbody>
                    </StyledTable>
                </ReferencesSection>

                <ReferencesSection>
                    <SectionTitle>Personal</SectionTitle>
                    <StyledTable>
                        <thead>
                        <tr>
                            <TableHeader>Name</TableHeader>
                            <TableHeader>Relation</TableHeader>
                            <TableHeader>Contact</TableHeader>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <TableData>Mr. B</TableData>
                            <TableData>Father</TableData>
                            <TableData>(582) 244-0406</TableData>
                        </tr>
                        <tr>
                            <TableData>Mrs. B</TableData>
                            <TableData>Mother</TableData>
                            <TableData>(418) 946-0596</TableData>
                        </tr>
                        </tbody>
                    </StyledTable>
                </ReferencesSection>
            </StyledReferences>
        </>
    );
};
