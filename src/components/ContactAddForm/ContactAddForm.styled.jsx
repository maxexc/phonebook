import styled from 'styled-components';

export const Title = styled.h2`
  font-family: 'Handlee', cursive;
  text-align: center;
`

export const FormTitle = styled.h1`
    font-size: 35px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
`
export const PhonebookForm = styled.form`
    margin: 0 auto;
    list-style: inside;
    display: flex;
    flex-direction: column;
    max-width: 640px;
    min-width: 340px;
    padding: 20px;
    border: 1px solid black;
    border: 0.3px solid darkcyan;
    border-radius: 5px;
    /* background-color: rgb(100, 237, 207); */
    color: darkblue;
    box-shadow: 3px 6px 6px rgba(0, 0, 0, 0.15);
`
export const FormLabel = styled.label`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`
export const FormInput = styled.input`
    width: 250px;
    margin-bottom: 10px;
    padding: 4px;
    border: 0.3px solid rgb(20, 66, 78);
    border-radius: 3px;
    background-color: rgba(228, 253, 252, 0.952);
    font-size: 18px;
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
        &:focus, :hover {
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);
}
`
export const FormBtn = styled.button`
    width: 125px;
    padding: 10px 15px;
    margin-top: 20px;
    background-color: rgb(20, 89, 116);
    /* background-color: rgb(28, 80, 165); */
    color: white;
    border: none;
    border-radius: 15px;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
        background-color: #fafafa;
        color: darkblue;
        box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.4);
        }
`