import styled from 'styled-components';
import { useState } from 'react';
import InputBox from './InputBox.tsx';
import OperationButtons from './OperationButtons.tsx';
import Output from './Output';

const StyledCalculator = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 5px solid darkgoldenrod;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    margin: 5vh auto;
    padding: 8vh;
    width: 90%;
    
    @media screen and (max-width: 1000px) {
        width: 90%;
    }
`;

const CalculatorTitle = styled.h3`
    font-family: 'Della Respira', serif;
    font-size: calc(20px + 1vw);
    font-weight: bold;
    color: darkgoldenrod;
    margin-bottom: 5px;
`;

export default function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('Result: ');

    const operationHandle = (operator: string) => {
        const n1 = Number(num1);
        const n2 = Number(num2);
        let result;

        if (isNaN(n1) || isNaN(n2)) {
            result = 'Please enter a valid number';
        } else {
            if (operator === "+") {
                result = n1 + n2;
            } else if (operator === "-") {
                result = n1 - n2;
            } else if (operator === "*") {
                result = n1 * n2;
            } else if (operator === "/") {
                result = n1 / n2;
            } else if (operator === "**") {
                result = 1;
                for (let i=0; i<n2; i++){
                    result *= n1;
                }
            } else {
                result = "Invalid operator"
            }
        }
        setResult(`Result: ${result}`);
    };

    const clearHandle = () => {
        setNum1('');
        setNum2('');
        setResult('Result: ');
    };

    return (
        <StyledCalculator>
            <CalculatorTitle>Calculator</CalculatorTitle>
            <InputBox num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2} />
            <OperationButtons performOperation={operationHandle} performClear={clearHandle} />
            <Output result={result} />
        </StyledCalculator>
    );
}