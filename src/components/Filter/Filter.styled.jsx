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

// export const FilterTitle = styled.h2`
//     font-size: 30px;
//     margin: 10px 0;
//     color: darkblue;
//     text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
//     text-align: center;
// `
// export const Filterinput = styled.input`
//     width: 275px;
//     height: 22px;
//     margin-bottom: 10px;
//     padding: 4px;
//     border: 0.3px solid rgb(78, 41, 20);
//     border: 0.3px solid darkcyan;
//     border: 0.3px solid rgb(20, 66, 78);
//     border-radius: 10px;
//     background-color: rgba(228, 253, 252, 0.952);
//     font-size: 18px;
//     transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
//         &:focus, :hover {
//         box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);
// }    
// `