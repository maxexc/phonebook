import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  min-width: 292px;
  width: 100%;
  padding: 8px 0px;
  transition: border-bottom 250ms linear, background-color 250ms linear, color 250ms linear;
  border-bottom: 1px solid rgba(0, 0, 0, 0.54);
  :hover {
    border-bottom: 1px solid #1363df;
    color: #003380;
    /* box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15); */
    text-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);
    :hover > svg {
      transition: color 250ms linear;
      color: #1363df;
    }
    :hover > div {
      transition: background-color 250ms linear, color 250ms linear;
      background-color: #0f7ec9;
      color: #fafafa;
    }
  }
`;

export const DeleteContact = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover > svg {
    transition: color 150ms linear;
    color: tomato;
  }
`;

export const Circle = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #1cb6cd;
/* #83cdff; */
 /* rgba(179, 255, 252, 0.952); */
/* #8cfcd1; */
 /* rgba(136, 252, 248, 0.952); */
/* rgb(100, 237, 207); */
 /* #E6E6E6; */
justify-content: center;
align-items: center;
display: flex;
margin-right: 10px;
`;