import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  height: 40px;
  background-color: white;
  padding: 20px;
  display: flex;
  font-weight: 700;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  opacity: 0.8;
`;

export const LengthMessage = () => {
  return <Container>아직 입력하신 내용이 없습니다.😢</Container>;
};
