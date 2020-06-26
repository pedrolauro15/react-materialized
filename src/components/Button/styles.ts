import styled, { css } from "styled-components";
import { Props } from "./index";

export const Container = styled.button<Props>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: 18px;
  font-weight: bold;
  padding: 12px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;

  ${props => props.outlined && css`
    background-color: transparent;
    border: 1px solid ${props.backgroundColor};
  `}

  &:hover {
    background-color: #2574badd;
  }

  &:active {
    background-color: #2574baaa;
  }
`;
