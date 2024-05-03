import { useQuery } from "@tanstack/react-query";
import { getCompany } from "../../api";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { Hcontainer } from "./Hcontainer";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  max-width: 660px;
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
`;
const Section01 = styled.div`
  padding: 180px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Form = styled.form`
  width: 100%;
  height: 50px;
  background-color: white;
  /* padding: 0 20px; */
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 5px 5px #e2e2e2;
  input {
    all: unset;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: black;
    padding-left: 20px;
  }
  input::placeholder {
    color: black;
    opacity: 0.5;
  }
`;
const Box = styled.div`
  width: 100%;
  margin-top: 18px;
  display: flex;
  h2 {
    padding: 10px 15px;
    border-radius: 20px;
    box-shadow: 0px 0px 5px 5px #e2e2e2;
    margin-left: 20px;
  }
  h2:first-child {
    margin-left: 0px;
  }
`;
const IconBox = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  svg {
    font-size: 30px;
    font-weight: 900;
    color: black;
  }
`;

export const Company = () => {
  const [productName, setproductName] = useState();

  const { data } = useQuery({
    queryKey: ["getDrbEasyDrugList", productName],
    queryFn: getCompany,
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmitHandler = (d) => {
    const { usertext } = d;
    setproductName(usertext);
  };

  const dataValue = data?.body?.items;

  return (
    <Wrap>
      <Section01>
        <Form onSubmit={handleSubmit(onsubmitHandler)}>
          <input
            {...register("usertext", {
              required: "약품 이름을 넣어주세요.",
            })}
            type="text"
            placeholder="약품명 입력해주세요."
          ></input>
          <IconBox>
            <IoIosSearch />
          </IconBox>
        </Form>

        <Box>
          <Link to={"/"}>
            <h2>약품명 검색</h2>
          </Link>
          <Link to={"/company"}>
            <h2>업체명 검색</h2>
          </Link>
          <Link to={"/titleitems"}>
            <h2>품목으로 검색</h2>
          </Link>
        </Box>
      </Section01>

      <Hcontainer condata={dataValue} />
    </Wrap>
  );
};
