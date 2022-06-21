import styled from "styled-components";
import theme from "./theme";

export const Container = styled.li``;

interface RowProps {
  align?: 'start' | 'end' | undefined
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-content: stretch;
  ${({ align }: RowProps) => align && `align-items: ${align}`};
  width: 100%;
`;

interface ColProps {
  size?: number | undefined;
  stretch?: boolean | undefined;
}

export const Col = styled.div`
  ${({ size }: ColProps) => `width: ${size}%` || undefined};
  ${({ stretch }: ColProps) => stretch && `align-self: stretch`};
  margin: ${theme.default.spacing.medium}px 0;
`;

export const ReleaseDate = styled.time`
  display: flex;
  align-items: end;
  justify-content: end;
  font-size: ${theme.default.fontSize.large}px;
`;

export const Name = styled.div`
  font-size: ${theme.default.fontSize.large}px;
`;
