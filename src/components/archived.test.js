import React from "react";
import Archived from "./archived";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";

const defaultProps = {
  items: [{ name: "audi" }, { name: "salary" }],
  testId: "archived"
};

describe("Archived component", () => {
  const setup = (props) => render(<Archived {...props} />);
  afterEach(cleanup);

  it("it should render the Archived components", () => {
    const { getByTestId, getByText } = setup(defaultProps);
    expect(getByText(defaultProps.items[0].name)).toBeInTheDocument();
    const archivedByTestId = getByTestId("archived");
    expect(archivedByTestId).toBeTruthy();
  });
});
