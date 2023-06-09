import styled from 'styled-components';

export const ContactListWr = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;

  max-width: 280px;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    gap: 20px 32px;
  }
  @media screen and (min-width: 1280px) {
    padding: 22px 0;
    max-width: 1248px;
  }
`;
