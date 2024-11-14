import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const components = [
  { name: "Simple", component: <App iterations={2} />, iterations: 2 },
  { name: "Medium", component: <App iterations={5} />, iterations: 5 },
  { name: "Complex", component: <App iterations={10} />, iterations: 10 },
];

describe.each(components)(
  "Perf testing $name component",
  ({ component, iterations }) => {
    beforeEach(() => {
      render(component);
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

    it("getByText selector performance", async () => {
      for (const index of Array.from({ length: iterations }).keys()) {
        const button = screen.getByText(`Button text ${index}`);
        await userEvent.click(button);
        await waitFor(() =>
          expect(screen.getByText(`Service text ${index}`)).toBeInTheDocument(),
        );
      }
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
  },
);
