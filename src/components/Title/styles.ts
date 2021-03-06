import styled, { css } from "styled-components";

export const Container = styled.h1<{ size: string }>`
  padding: 1rem 0;

  ${({ size }) => {
    switch (size) {
      case "L":
        return css`
          font-size: 2.5rem;
          line-height: 3rem;
        `;
      default:
        return css`
          font-size: 2rem;
          line-height: 2.5rem;
        `;
    }
  }}
`;
