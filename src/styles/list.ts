import styled from "styled-components";
import { motion } from "framer-motion";

export const listVariants = {
  open: {
    transition: {
      straggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

export const List = styled(motion.ul)`
  list-style-type: none;
`;
