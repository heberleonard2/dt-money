import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
  overflow-x: auto;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    min-width: 250px;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-bg {
      background: var(--green);
      color: #fff;

      /* @media (max-width: 998px) {
        border-right: 2rem solid transparent;
        box-sizing: content-box;
        min-width: 212px;
        -webkit-background-clip: padding-box;
        background-clip: padding-box;
      } */
    }
  }
`;
