import styled from "styled-components";

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 198px;
  height: 297px;
  background-image: ${({ url }) => `url(${url})`};
  /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
    transform: scale(0.95);
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
