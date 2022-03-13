import styled from "styled-components";

/*variables*/
const flexCenter = `
    display: flex;
    align-items: center;
    justify-content: center;
`;

const flexColumnBetween = `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

/*components*/
export const CountryCard = styled.div`
  ${flexColumnBetween};
  height: 50%;
  width: 50%;
  border-radius: 6px;
  background: rgba(15, 45, 245, 0.5);
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    font-weight: 600;
    cursor: pointer;
  }
`;

export const Title = styled.p`
  ${flexCenter};
  height: 50%;
  font-size: 35px;
  font-weight: 600px;
  line-height: 45px;
  color: #000;
`;

export const Code = styled.p`
  ${flexCenter};
  height: 50%;
  width: 100%;
  font-size: 26px;
  font-weight: 600px;
  line-height: 28px;
  color: #000;
  background: rgba(197, 190, 88, 0.7);
`;
