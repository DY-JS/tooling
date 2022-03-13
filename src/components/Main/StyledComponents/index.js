import styled from "styled-components";
import img from "../../../utils/pictures/earth.png";

const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Main = styled.div`
  ${flexCenter};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  background: url(${img}) 0 / cover no-repeat;
`;
