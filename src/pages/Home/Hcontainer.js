import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;
const ConWrap = styled.div`
  border-radius: 20px;
  box-shadow: 0px 0px 5px 5px #e2e2e2;
  margin-top: 30px;
  padding: 20px;
`;
const TextWrap = styled.div`
  color: black;
  padding: 20px;
  border-bottom: 1px solid black;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 380px;
  margin-top: 20px;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
const Noimg = "https://dhub.dgist.ac.kr/resources/images/common/no_img.jpg";
export const Hcontainer = ({ condata }) => {
  return (
    <Container>
      {condata &&
        condata.map((data) => (
          <Link
            key={data.itemSeq}
            to={`/detail/${data.itemName}`}
            state={{ result: data }}
          >
            <ConWrap>
              <TextWrap>
                <h2>{data.entpName}</h2>
                <p>{data.itemName}</p>
              </TextWrap>
              <ImgWrap>
                <img
                  src={data?.itemImage ? data.itemImage : Noimg}
                  alt={data.itemName}
                ></img>
              </ImgWrap>
            </ConWrap>
          </Link>
        ))}
    </Container>
  );
};
