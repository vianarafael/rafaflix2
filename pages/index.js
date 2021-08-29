import styled from "styled-components";
import PageDefault from "../src/components/commons/pageDefault";
import Text from "../src/foundation/Text";

export default function Home() {
  return (
    <PageDefault>
      <Text
        tag="h1"
        textAlign="center"
        // just a test
        color={{ xs: "blue", md: "purple" }}
      >
        My page
      </Text>
    </PageDefault>
  );
}
