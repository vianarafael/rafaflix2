import React from "react";
import SlickSlider from "react-slick";
import styled from "styled-components";

console.log("SlickSlider", SlickSlider);

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
  &:focus {
    outline: none;
  }
`;

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Slider = ({ children, noRepeat }) => {
  let infinite;
  if (noRepeat) {
    infinite = false;
  } else {
    infinite = true;
  }
  return (
    <Container>
      <SlickSlider
        {...{
          dots: false,
          infinite,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
        }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;
