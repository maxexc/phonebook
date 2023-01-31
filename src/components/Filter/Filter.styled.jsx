import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 292px;
  width: 100%;
  margin-bottom: 20px;
  transition: border-bottom 250ms linear;
    :hover > svg {
      transition: color 250ms linear;
      color: #005ae0;
    }  
`;
