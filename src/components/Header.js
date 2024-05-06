import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
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
  z-index: 9999;
`;
const HomeIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`;

export const Header = () => {
  return (
    <Container>
      <h3>약탐정</h3>
      <Link to={"/"}>
        <HomeIcon>
          <IoHomeOutline />
        </HomeIcon>
      </Link>
    </Container>
  );
};
