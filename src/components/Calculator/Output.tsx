import styled from 'styled-components';

const StyledOutput = styled.h3<{ isNegative: boolean }>`
    text-align: center;
    font-family: 'Della Respira', serif;
    font-size: calc(15px + 1vw);
    color: ${({ isNegative }) => outputColor(isNegative)};
`;

interface OutputProps {
    result: string;
}

function outputColor(isNegative: boolean) {
    if(isNegative) {
        return 'red';
    } else{
        return '#303030';
    }
}

export default function Output({ result }: OutputProps) {
    const resultNum = Number(result.replace('Result: ', ''));
    const isNegative = resultNum < 0;
    return <StyledOutput isNegative={isNegative}>{result}</StyledOutput>;
}
