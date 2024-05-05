import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyled = createGlobalStyle`
${reset}

body{
    box-sizing: border-box;
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: -1px;
}
img{
    width: 100%;
    display: block;
}
a{
    text-decoration: none;
    color: black;
}
`;
