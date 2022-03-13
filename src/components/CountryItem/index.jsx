import { CountryCard, Title, Code } from "./StyledComponents";

const CountryItem = ({ country }) => {
  return (
    <CountryCard>
      <Title>Ukraine</Title>
      <Code>UK</Code>
    </CountryCard>
  );
};

export default CountryItem;
