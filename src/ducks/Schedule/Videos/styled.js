import styled from "styled-components";

export const StyledVideos = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  background: #F9F9F9;
  padding: 10px;
  &:after {
    content: "";
    position: fixed;
    width: calc(100% - 320px);
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    display: block;
  }
`;

export const StyledClose = styled.div`
  background: gray;
  width: 35px;
  height: 35px;
  font-size: 40px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -35px;
  z-index: 100;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  color: white;
  cursor: pointer;
`;
