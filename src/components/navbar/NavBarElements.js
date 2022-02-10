import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background: #1e1e1e;
  color: #fff;
  display: flex;
  height: 80px;
  justify-content: space-between;
  top: 0px;
  width: 100%;
  position: sticky;
  z-index: 20;
`;

export const Logo = styled.img`
  margin-left: 30px;
  width: 200px;
`;

export const HeaderMenu = styled.div`
  margin-right: 30px;
`;

export const HeaderMenuProfile = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`;

export const HeaderMenuProfileImg = styled.img`
  margin-right: 8px;
  width: 50px;
`;
