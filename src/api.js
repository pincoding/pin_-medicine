import axios from "axios";

const key =
  "oB0mv5kUrEdNaB5JWIAH4cWj3db03JdxoI1CnUjosn3FoCZ8Wj8QV3eSxyF8gLhcSXFGz1u+w0hqdpfUqhItKQ==";

const instance = axios.create({
  baseURL: "http://apis.data.go.kr/1471000/DrbEasyDrugInfoService/",
  params: {
    type: "json",
    ServiceKey: key,
    numOfRows: 20,
  },
});

export const getMainBasic = ({ queryKey }) => {
  const [getDrbEasyDrugList, keyword] = queryKey;
  return instance
    .get(`${getDrbEasyDrugList}?itemName=${keyword}`)
    .then((res) => res.data);
};
export const getCompany = ({ queryKey }) => {
  const [getDrbEasyDrugList, keyword] = queryKey;
  return instance
    .get(`${getDrbEasyDrugList}?entpName=${keyword}`)
    .then((res) => res.data);
};
export const getItems = ({ queryKey }) => {
  const [getDrbEasyDrugList, keyword] = queryKey;
  return instance
    .get(`${getDrbEasyDrugList}?itemSeq=${keyword}`)
    .then((res) => res.data);
};
