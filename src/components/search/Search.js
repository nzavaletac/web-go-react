import React from "react";
import { Container, Input, Title } from "./SearchElements";

const Search = () => {
  return (
    <Container>
      <Title>What do you want to do today?</Title>
      <Input type="text" placeholder="Search events, places, etc..." />
    </Container>
  );
};

export default Search;
