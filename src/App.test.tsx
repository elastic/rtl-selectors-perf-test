import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Performance Tests for React Testing Library Selectors", () => {
  const iterations = 10;

  beforeEach(() => {
    render(<App />);
  });

  it("getByTestId selector performance", async () => {
    for (const index of Array.from({ length: iterations }).keys()) {
      const button = screen.getByTestId(`button-test-id-${index}`);
      await userEvent.click(button);
      await waitFor(() =>
        expect(
          screen.getByTestId(`button-test-id-${index}`),
        ).toBeInTheDocument(),
      );
    }
  });

  it("getByText selector performance", async () => {
    for (const index of Array.from({ length: iterations }).keys()) {
      const button = screen.getByText(`Button text ${index}`);
      await userEvent.click(button);
      await waitFor(() =>
        expect(screen.getByText(`Service text ${index}`)).toBeInTheDocument(),
      );
    }
  });

  it("getByRole selector performance", async () => {
    for (const index of Array.from({ length: iterations }).keys()) {
      const button = screen.getByRole("button", {
        name: `Button label ${index}`,
      });
      await userEvent.click(button);
      await waitFor(() =>
        expect(
          screen.getByRole("paragraph", {
            name: `Service label ${index}`,
          }),
        ),
      );
    }
  });

  it("getByLabelText selector performance", async () => {
    for (const index of Array.from({ length: iterations }).keys()) {
      const button = screen.getByLabelText(`Button label ${index}`);
      await userEvent.click(button);
      await waitFor(() =>
        expect(screen.getByLabelText(`Service label ${index}`)),
      );
    }
  });
});
