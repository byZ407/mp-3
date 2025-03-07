import styled from 'styled-components';

interface OutputTextProps {
    isNegative: boolean;
}

const OutputText = styled.h3<OutputTextProps>`
    text-align: center;
    font-family: 'Della Respira', serif;
    font-size: calc(15px + 1vw);
    color: ${({ isNegative }) => (isNegative ? 'red' : '#303030')};
`;

interface OutputProps {
    result: string;
}

export default function Output({ result }: OutputProps) {
    const numberPart = result.replace('Result: ', '').trim();
    const isNegative = !isNaN(Number(numberPart)) && Number(numberPart) < 0;

    return <OutputText id="output" isNegative={isNegative}>{result}</OutputText>;
}