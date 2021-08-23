import styled from "styled-components";
import PageDefault from "../src/components/pageDefault";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
`;

export default function Home() {
  return (
    <PageDefault>
      <Title>My page</Title>
    </PageDefault>
  );
}
