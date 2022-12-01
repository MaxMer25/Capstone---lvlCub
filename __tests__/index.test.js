import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Reward from "../pages/reward";

describe("Home", () => {
  it("renders home h1", () => {
    render(<Reward />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });
});
