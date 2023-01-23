import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    padding: 12px;
    font-weight: 700;
    color: #2a363b;
    &.active {
        color: #e84a5f;
    }
    &:hover {
        color: rgb(241, 53, 53);
    }
`