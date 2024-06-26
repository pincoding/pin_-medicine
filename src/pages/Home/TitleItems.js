import { useQuery } from "@tanstack/react-query";
import { getItems } from "../../api";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Hcontainer } from "./Hcontainer";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LengthMessage } from "./LengthMessage";
import { Loading } from "../loading/Loading";

const Wrap = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #f5f5f5;
  padding-bottom: 100px;
`;
const Section01 = styled.div`
  padding: 60px 20px 20px 20px;
`;
const FormWrap = styled.div`
  background-color: white;
  margin-top: 20px;
  padding: 20px 20px;
  border-radius: 20px;
`;
const TextWrap = styled.div`
  padding: 10px 0;
  h1 {
    font-size: 20px;
    font-weight: 900;
  }
`;
const TextCon = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;

  text-align: center;
  h3 {
    cursor: pointer;
    padding: 4px 17px;
    margin-left: 10px;
    margin-top: 5px;
    font-size: 14px;
    font-weight: 700;
    border-radius: 5px;
    background-color: #e4f3fa;
    box-shadow: 0px 0px 5px 5px white;
    color: #071341;
  }
  h3:first-child {
    margin-left: 0;
  }
  h3:hover {
    background-color: #a2c1ed;
    color: white;
  }
`;
const Form = styled.form`
  width: 100%;
  height: 40px;
  background-color: #f5f5f5f5;
  position: relative;
  border-radius: 5px;
  display: ${(porps) => porps.$prchange};
  input {
    all: unset;
    width: 100%;
    height: 100%;
    font-size: 14px;
    font-weight: 600;
    color: black;
    padding-left: 20px;
  }
  input::placeholder {
    color: black;
    opacity: 0.5;
  }
`;

const IconBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  svg {
    font-size: 24px;
    font-weight: 900;
    color: black;
  }
`;
const Errors = styled.div`
  color: salmon;
  font-size: 12px;
  font-weight: 600;
  padding-left: 20px;
  position: relative;
`;
export const TitleItems = () => {
  const nav = useNavigate();
  const [productName, setproductName] = useState();
  const [isloading, setIsLoading] = useState(true);

  const { data } = useQuery({
    queryKey: ["getDrbEasyDrugList", productName],
    queryFn: getItems,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const onsubmitHandler = (d) => {
    const { usertext } = d;
    setproductName(usertext);
  };

  const homeHandler = () => {
    nav("/");
  };
  const comHandler = () => {
    nav("/company");
  };
  const codeHandler = () => {
    nav("/titleitems");
  };

  const dataValue = data?.body?.items;

  return (
    <>
      {isloading ? (
        <>
          <Loading />
        </>
      ) : (
        <>
          <Wrap>
            <Helmet>
              <title>홈 | 약품명</title>
            </Helmet>
            <Section01>
              <FormWrap>
                <TextWrap>
                  <h1>약찾기</h1>
                  <TextCon>
                    <h3 onClick={homeHandler}>약품명</h3>
                    <h3 onClick={comHandler}>업체명</h3>
                    <h3 onClick={codeHandler}>코드명</h3>
                  </TextCon>
                </TextWrap>
                <Form onSubmit={handleSubmit(onsubmitHandler)}>
                  <input
                    {...register("usertext", {
                      required: "약품 이름을 넣어주세요.",
                    })}
                    type="text"
                    placeholder="약품명 입력해주세요."
                    checked
                  ></input>
                  <IconBox>
                    <IoIosSearch />
                  </IconBox>
                </Form>
                <Errors>{errors?.usertext?.message}</Errors>
              </FormWrap>
            </Section01>
            {/* {valueData && (
        <InfiniteScroll
          dataLength={valueData.length}
          next={axiosData}
          hasMore={true}
        > */}
            {dataValue && dataValue.length > 0 ? (
              <Hcontainer condata={dataValue} />
            ) : (
              <>
                <LengthMessage></LengthMessage>
              </>
            )}

            {/* </InfiniteScroll>
      )} */}
          </Wrap>
        </>
      )}
    </>
  );
};
