import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px 0px;
  transition: border-bottom 250ms linear;
  border-bottom: 1px solid rgba(0, 0, 0, 0.54);
  :hover {
    border-bottom: 1px solid #1363df;
    :hover > svg {
      transition: color 250ms linear;
      color: #1363df;
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
    transition: color 250ms linear;
    color: tomato;
  }
`;