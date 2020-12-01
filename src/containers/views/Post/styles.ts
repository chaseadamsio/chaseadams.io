import styled from "styled-components";

export const Author = styled.span`
  display: inline-block;
  margin-right: 0.25rem;
  font-size: 0.9rem;

  &::after {
    margin-left: 0.25rem;
    font-size: 0.8rem;
    color: var(--color-muted);
    content: "/";
  }
`;

export const MetaWrapper = styled.div`
  margin: 0.5rem 0 2rem;
  color: var(--color-muted);
`;
