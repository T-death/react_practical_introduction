import styled from 'styled-components';

const MyPanel = styled.div`
  width: 300px;
  padding: 10px;
  border: 8px solid #000;
  border-radius: 5px;
  background-color: orange;
  color: white;
`;

export default function StyledComp() {
  return (
    <MyPanel><b>Styled JSX</b>は、JSX式にスタイル定義を行うことができる！</MyPanel>
  );
}