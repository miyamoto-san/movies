import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "./theme";

export const itemVariants = {
  open: {
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  }
}

export const Container = styled(motion.li)`
  background-color: ${theme.default.color.secondary};
  border: 1px solid ${theme.default.color.border};
  padding: ${theme.default.spacing.large}px;
  margin-bottom: ${theme.default.spacing.large}px;
  margin-left: ${theme.default.spacing.medium}px;
  margin-right: ${theme.default.spacing.medium}px;
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
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
`;

interface ColProps {
  size?: number | undefined;
  stretch?: boolean | undefined;
}

export const Col = styled.div`
  ${({ size }: ColProps) => `width: ${size}%` || undefined};
  ${({ stretch }: ColProps) => stretch && `align-self: stretch`};
  margin: ${theme.default.spacing.medium}px 0;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const ReleaseDate = styled.time`
  display: flex;
  align-items: end;
  justify-content: end;
  font-size: ${theme.default.fontSize.large}px;
  @media (max-width: 1200px) {
    align-items: start;
    justify-content: start;
  }
`;

export const Name = styled.div`
  font-size: ${theme.default.fontSize.large}px;
`;
