import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding-bottom: 100px;
`;
const Container = styled.div`
  padding: 100px 20px 0px 20px;
`;
const ImgWrap = styled.div`
  height: 300px;
  box-shadow: 0px 0px 5px 5px #e9ecef;
  border-radius: 20px;
  img {
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
const TextWrap = styled.div`
  background-color: white;
  margin-top: 20px;
  background-color: #ffff;
  border-radius: 20px;
`;
const TextCon = styled.div`
  padding: 10px 20px;
  h2 {
    font-size: 16px;
    font-weight: 600;
  }
  p {
    font-size: 14px;
    opacity: 0.7;
  }
`;

export const Detail = () => {
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [state]);

  const Noimg = "https://dhub.dgist.ac.kr/resources/images/common/no_img.jpg";
  console.log(state?.result);

  const titleValue = [
    {
      id: 0,
      htitle: "업체명",
      ptitle: `${state?.result?.entpName}`,
    },
    {
      id: 1,
      htitle: "제품명",
      ptitle: `${state?.result?.itemName}`,
    },
    {
      id: 2,
      htitle: "품목기준코드",
      ptitle: `${state?.result?.itemSeq}`,
    },
  ];

  const dataValue = [
    {
      id: 0,
      htext: "이 약의 효능은 무엇입니까?",
      phtext: `${state?.result?.efcyQesitm}`,
    },
    {
      id: 1,
      htext: "이 약은 어떻게 사용합니까?",
      phtext: `${state?.result?.useMethodQesitm}`,
    },
    {
      id: 2,
      htext: "이 약을 사용하기 전에 반드시 알아야 할 내용은 무엇입니까?",
      phtext: `${state?.result?.atpnWarnQesitm}`,
    },
    {
      id: 3,
      htext: "이 약의 사용상 주의사항은 무엇입니까?",
      phtext: `${state?.result?.atpnQesitm}`,
    },
    {
      id: 4,
      htext: "이 약을 사용하는 동안 주의해야 할 약 또는 음식은 무엇입니까?",
      phtext: `${state?.result?.intrcQesitm}`,
    },
    {
      id: 5,
      htext: "이 약은 어떤 이상반응이 나타날 수 있습니까?",
      phtext: `${state?.result?.seQesitm}`,
    },
    {
      id: 6,
      htext: "이 약은 어떻게 보관해야 합니까?",
      phtext: `${state?.result?.depositMethodQesitm}`,
    },
  ];

  return (
    <Wrap>
      <Helmet>
        <title>자세히보기</title>
      </Helmet>
      <Container>
        <ImgWrap>
          <img
            src={state?.result?.itemImage ? state?.result?.itemImage : Noimg}
            alt=""
          ></img>
        </ImgWrap>

        <TextWrap>
          {titleValue.map((data) => (
            <TextCon>
              <h2>{data.htitle}</h2>
              <p>{data.ptitle}</p>
            </TextCon>
          ))}
        </TextWrap>

        <Box mt={"20px"} borderRadius={"20px"} bg={"#fff"}>
          {dataValue.map((data) => (
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton padding={"15px 20px"}>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      display={"flex"}
                      alignItems={"center"}
                      fontSize={"16px"}
                      fontWeight={"400"}
                    >
                      <h2>{data.htext}</h2>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  padding={"10px 20px"}
                  border={"none"}
                  bg={"gray.100"}
                  fontSize={"14px"}
                >
                  <p style={{ opacity: "0.7" }}>{data.phtext}</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Wrap>
  );
};
