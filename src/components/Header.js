import styled from "styled-components";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 900;
  background-color: white;
`;

export const Header = () => {
  return (
    <Container>
      <h3>약탐정</h3>
    </Container>
  );
};
