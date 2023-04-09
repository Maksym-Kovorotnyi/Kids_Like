import styled from 'styled-components';

export const HeaderBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
`;

export const HeaderWrapper = styled.div`
  padding: 22px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 22px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 22px 0;
  }
`;
