import { storiesOf } from "@storybook/react";
import React from "react";
import { TextField } from "../src";

storiesOf("TextField", module).add("Default", () => <TextField label="Input" elementColor="#F00"/>);
