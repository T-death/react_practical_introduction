import styled from 'styled-components';

export function MyButton({ className, children }) {
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}

export const MyStyledButton = styled(MyButton)`
  display: block;
  background-color: orange;
  color: white;
  font-weight: bold;
  width: 80px;
  height: 50px;
`;