import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  color: white;
  text-transform: uppercase;
  padding-bottom: 2px;
  margin: 10px;  
  &.active {
    text-shadow: 1px 1px 2px black;
    border-bottom: 1px solid tomato;
  }
`;

// export const MenuLink = styled(NavLink)`
//     display: inline-block;
//     text-decoration: none;
//     padding: 12px;
//     font-weight: 700;
//     color: #2a363b;
//     &.active {
//         color: #e84a5f;
//     }
//     &:hover {
//         color: rgb(241, 53, 53);
//     }
// `