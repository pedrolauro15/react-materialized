import React from "react";
import { Container } from "./styles";

export interface Props {
  backgroundColor?: string;
  color?: string;
  outlined?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#2574BA",
  color = "#FFF",
  outlined = false,
}) => {
  return (
    <Container backgroundColor={backgroundColor} color={color} outlined={outlined}>
      {children}
    </Container>
  );
};
