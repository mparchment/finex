import styled from 'styled-components';

export const Flexbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;