import { useLocation } from "react-router-dom";

export const Detail = () => {
  const loc = useLocation();
  console.log(loc);

  return <div>디테일</div>;
};
