import styled from 'styled-components';
import { useState } from 'react';
import InputBox from './Input';
import OperationButtons from './Buttons';
import Output from './Output';

const CalculatorContainer = styled.div`
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

    const handleOperation = (operator: string) => {
        const n1 = Number(num1);
        const n2 = Number(num2);
        let calcResult: string | number;

        if (isNaN(n1) || isNaN(n2)) {
            calcResult = 'Please enter a valid number';
        } else {
            if (operator === "+") {
                calcResult = n1 + n2;
            } else if (operator === "-") {
                calcResult = n1 - n2;
            } else if (operator === "*") {
                calcResult = n1 * n2;
            } else if (operator === "/") {
                calcResult = n1 / n2;
            } else if (operator === "**") {
                calcResult = 1;
                for (let i=0; i<n2; i++){
                    calcResult *= n1;
                }
            } else {
                calcResult = "Invalid operator"
            }
        }
        setResult(`Result: ${calcResult}`);
    };

    const handleClear = () => {
        setNum1('');
        setNum2('');
        setResult('Result: ');
    };

    return (
        <CalculatorContainer id="calculator-container">
            <CalculatorTitle id="calculator-title">Calculator</CalculatorTitle>
            <InputBox num1={num1} setNum1={setNum1} num2={num2} setNum2={setNum2} />
            <OperationButtons onOperation={handleOperation} onClear={handleClear} />
            <Output result={result} />
        </CalculatorContainer>
    );
}