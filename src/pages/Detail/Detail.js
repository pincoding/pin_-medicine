import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: teal;
  padding-bottom: 100px;
`;
const Container = styled.div`
  padding: 100px 20px 0px 20px;
`;
const ImgWrap = styled.div`
  height: 300px;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
const TextWrap = styled.div`
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  background-color: skyblue;
`;
const TextCon = styled.div`
  padding: 20px;
  h2 {
    font-size: 18px;
    font-family: 900;
  }
  p {
    margin-top: 10px;
    font-size: 14px;
    opacity: 0.7;
    line-height: 20px;
  }
`;

export const Detail = () => {
  const { state } = useLocation();
  console.log(state?.result?.itemImage);

  const Noimg = "https://dhub.dgist.ac.kr/resources/images/common/no_img.jpg";
  console.log(state?.result);
  return (
    <Wrap>
      <Container>
        <ImgWrap>
          <img
            src={state?.result?.itemImage ? state?.result?.itemImage : Noimg}
            alt=""
          ></img>
        </ImgWrap>
        <TextWrap>
          <TextCon>
            <h2>업체명</h2>
            <p>{state?.result?.entpName}</p>
          </TextCon>
          <TextCon>
            <h2>제품명</h2>
            <p>{state?.result?.itemName}</p>
          </TextCon>
          <TextCon>
            <h2>품목기준코드</h2>
            <p>{state?.result?.itemSeq}</p>
          </TextCon>
          <TextCon>
            <h2>이 약의 효능은 무엇입니까?</h2>
            <p>{state?.result?.efcyQesitm}</p>
          </TextCon>
          <TextCon>
            <h2>이 약은 어떻게 사용합니까?</h2>
            <p>{state?.result?.useMethodQesitm}</p>
          </TextCon>
          <TextCon>
            <h2>이 약을 사용하기 전에 반드시 알아야 할 내용은 무엇입니까?</h2>
            <p>{state?.result?.atpnWarnQesitm}</p>
          </TextCon>
          <TextCon>
            <h2>이 약의 사용상 주의사항은 무엇입니까?</h2>
            <p>{state?.result?.atpnQesitm}</p>
          </TextCon>
          <TextCon>
            <h2>
              이 약을 사용하는 동안 주의해야 할 약 또는 음식은 무엇입니까?
            </h2>
            <p>{state?.result?.intrcQesitm}</p>
          </TextCon>
          <TextCon>
            <h2>이 약은 어떤 이상반응이 나타날 수 있습니까?</h2>
            <p>{state?.result?.seQesitm}</p>
          </TextCon>
          <TextCon>
            <h2>이 약은 어떻게 보관해야 합니까?</h2>
            <p>{state?.result?.depositMethodQesitm}</p>
          </TextCon>
        </TextWrap>
      </Container>
    </Wrap>
  );
};
