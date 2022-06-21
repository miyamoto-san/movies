import styled from "styled-components";
import theme from "./theme";

export const Container = styled.li`
  background-color: ${theme.default.color.secondary};
  border: 1px solid ${theme.default.color.border};
  padding: ${theme.default.spacing.large}px;
  margin-bottom: ${theme.default.spacing.large}px;
  border-radius: 4px;
  box-shadow: 5px 5px 0px -1px ${theme.default.color.boxShadow};
  &:last-child {
    margin-bottom: 0;
  }
  * {
    background: transparent;
  }
`;

interface RowProps {
  align?: "start" | "end" | undefined;
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
