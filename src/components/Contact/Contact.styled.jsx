import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  font-size: var(--font-size-base);
  font-weight: 600;
  min-width: 300px;
  max-width: 1200px;
  width: 100%;
  padding: 8px;
  background-color: rgba(159, 250, 255, 0.285);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow-color);
  transition: box-shadow 0.3s ease;
  backdrop-filter: blur(10px);

  :hover {
    box-shadow: 0 4px 8px var(--shadow-color);
    background-color: var(--hover-color);
    color: var(--primary-color);
  }

  @media screen and (max-width: 768px) {
    padding: 4px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  width: 100%;
  text-align: center;
  gap: 10px;
  font-size: 16px;
  max-width: 280px;

  @media screen and (min-width: 1200px) {
    max-width: 1200px; 
  }

  @media screen and (min-width: 600px) {
    max-width: 600px; 
  }

  @media screen and (min-width: 480px) {
    max-width: 480px; 
  }

  @media screen and (max-width: 768px) {
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: start;
  }

  @media screen and (max-width: 460px) {
    max-width: 250px;
    text-align: left;
  }

  @media screen and (max-width: 400px) {
    max-width: 220px;
  }
`;

export const Name = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 240px;
  display: flex;
  height: 22px;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 230px;
  }

  @media screen and (max-width: 460px) {
    max-width: 210px;
  }

  @media screen and (max-width: 400px) {
    max-width: 190px;
  }
`;

export const Number = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 240px;
  height: 100%;
  text-align: left;

  @media screen and (max-width: 460px) {
    max-width: 210px;
  }

  @media screen and (max-width: 400px) {
    max-width: 190px;
  }
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  border-radius: 50%;
  background-color: var(--secondary-color);
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2px;
`;

export const PatchContact = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  > svg {
    transition: color 150ms linear;
    color: var(--primary-color);
    font-size: 24px;
  }

  :hover > svg {
    color: var(--success-color);
  }
`;

export const DeleteContact = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  > svg {
    color: var(--danger-color);
    font-size: 24px;
  }

  :hover > svg {
    color: tomato;
  }
`;
