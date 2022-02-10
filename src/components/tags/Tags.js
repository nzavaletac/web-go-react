import React from "react";
import { Container, Icon } from "./TagsElements";
import price from "../../assets/images/price.svg";
import categories from "../../assets/images/categories.svg";
import date from "../../assets/images/date.svg";

const Tags = () => {
  return (
    <Container>
      <Icon to="/">
        <img src={price} alt="" />
      </Icon>
      <p>Price</p>
      <Icon to="/">
        <img src={categories} alt="" />
      </Icon>
      <p>Categories</p>
      <Icon to="/">
        <img src={date} alt="" />
      </Icon>
      <p>Date</p>
    </Container>
  );
};

export default Tags;
