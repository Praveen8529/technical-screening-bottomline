import React from "react";
import Header from "./header";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

const defaultProps = {
  text: "Default Text Test",
  testId: "header"
};

describe("Header component", () => {
  const setup = (props) => render(<Header {...props} />);
  afterEach(cleanup);

  it("it should render the text prop correctly", () => {
    const { getByTestId, getByText } = setup(defaultProps);
    expect(getByText(defaultProps.text)).toBeInTheDocument();
    const headerByTestId = getByTestId("header");
    expect(headerByTestId).toBeTruthy();
  });
});
