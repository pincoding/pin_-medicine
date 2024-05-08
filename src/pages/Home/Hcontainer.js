import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 0px;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;
`;
const ConWrap = styled.div`
  height: 220px;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 5px  #e2e2e23b;
  margin-top: 30px;
  padding: 12px;
`;
const TextWrap = styled.div`
  color: black;
  margin-top: 10px;
  border-top: 1px solid black;

  h2 {
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    opacity: 0.7;
  }
`;

const ImgWrap = styled.div`
  height: 110px;
  img {
    height: 100%;
    object-fit: cover;
  }
`;
const Noimg = "https://dhub.dgist.ac.kr/resources/images/common/no_img.jpg";
export const Hcontainer = ({ condata }) => {
  return (
    <Container>
      {condata &&
        condata.map((data,index) => (
          <div key={index}>
            <Link to={`/detail/${data.itemName}`} state={{ result: data }}>
              {/* {console.log(data)} */}
              <ConWrap>
                <ImgWrap>
                  <img
                    src={data?.itemImage ? data.itemImage : Noimg}
                    alt={data.itemName}
                  ></img>
                </ImgWrap>
                <TextWrap>
                  <h2>{data.entpName}</h2>
                  <p>{`${data.itemName.slice(0, 30)}`}</p>
                </TextWrap>
              </ConWrap>
            </Link>
          </div>
        ))}
    </Container>
  );
};
