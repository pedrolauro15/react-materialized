import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src";

storiesOf("Button", module).add("Default", () => (
  <Button>
    Botão
  </Button>
));

storiesOf("Button", module).add("Outlined", () => (
  <Button outlined>
    Botão sem preenchimento
  </Button>
));
