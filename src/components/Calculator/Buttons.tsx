import styled from 'styled-components';

const StyledButton = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 3vh;
`;

const OperatorButton = styled.button`
  background-color: #282828;
  color: darkgoldenrod;
  border: 2px solid darkgoldenrod;
  padding: 1vh 2vw;
  font-size: calc(12px + 0.5vw);
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  min-width: 40px;
    
  &:hover {
    background-color: darkgoldenrod;
    color: white;
  }
`;

interface OperationButtonsProps {
    onOperation: (operator: string) => void;
    onClear: () => void;
}

export default function OperationButtons({ onOperation, onClear }: OperationButtonsProps) {
    return (
        <StyledButton>
            <OperatorButton onClick={() => onOperation('+')}>+</OperatorButton>
            <OperatorButton onClick={() => onOperation('-')}>-</OperatorButton>
            <OperatorButton onClick={() => onOperation('*')}>*</OperatorButton>
            <OperatorButton onClick={() => onOperation('/')}>/</OperatorButton>
            <OperatorButton onClick={() => onOperation('**')}>**</OperatorButton>
            <OperatorButton onClick={onClear}>Clear</OperatorButton>
        </StyledButton>
    );
}