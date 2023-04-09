import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 22px;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 16px;
  }
`;
