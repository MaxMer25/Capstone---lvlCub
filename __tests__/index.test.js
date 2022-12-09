import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header/Header";

describe("Home", () => {
  it("renders home h1", () => {
    render(<Header />);

    const heading = screen.getByRole("img");

    expect(heading).toBeInTheDocument();
  });
});
