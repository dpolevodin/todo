import React from "react";
import { render } from "@testing-library/react";

import { UserForm } from "./UserForm";

describe("UserForm", () => {
  test("renders UserForm component", () => {
    render(<UserForm />);
  });
});
