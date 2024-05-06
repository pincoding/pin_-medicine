import styled from "styled-components";
import ClockLoader from "react-spinners/ClockLoader";
const Container = styled.div`
  max-width: 450px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateY(-50%);
  transform: translateX(-50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <ClockLoader color="#384E67" />
    </Container>
  );
};
