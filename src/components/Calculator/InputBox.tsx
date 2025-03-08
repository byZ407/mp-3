import styled from 'styled-components';

const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 4vh;
`;

const Label = styled.label`
  font-family: 'Della Respira', serif;
  font-size: calc(15px + 0.3vw);
  font-weight: bold;
  color: #303030;
  padding: 2vh;
`;

const Input = styled.input`
  background-color: #F5F5F5;
  width: 90%;
  max-width: 300px;
  padding: 1vh 0;
  font-size: calc(12px + 0.5vw);
  border: 2px solid darkgoldenrod;
  text-align: center;
    
  @media screen and (max-width: 1000px) {
    width: 50%;
  }
`;

interface InputBoxProps {
    num1: string;
    num2: string;
    setNum1: (value: string) => void;
    setNum2: (value: string) => void;
}

export default function InputBox({ num1, setNum1, num2, setNum2 }: InputBoxProps) {
    return (
        <StyledInput>
            <Label>First Number:</Label>
            <Input type="text" value={num1} onChange={(e) => setNum1(e.target.value)}/>
            <Label>Second Number:</Label>
            <Input type="text" value={num2} onChange={(e) => setNum2(e.target.value)}/>
        </StyledInput>
    );
}