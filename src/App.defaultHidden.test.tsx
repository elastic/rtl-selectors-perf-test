import { configure } from "@testing-library/dom";
import { waitFor, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

configure({ defaultHidden: true });

const components = [
  {
    name: "Simple",
    component: <App iterations={2} />,
    iterations: 2,
    depth: 1,
  },
  {
    name: "Medium",
    component: <App iterations={5} />,
    iterations: 5,
    depth: 3,
  },
  {
    name: "Complex",
    component: <App iterations={10} />,
    iterations: 10,
    depth: 5,
  },
];

describe.each(components)(
  "Perf testing $name component with iterations complexity if '$iterations' and depth complexity of '$depth'",
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

    it("getByPlaceholderText selector performance", async () => {
      for (const index of Array.from({ length: iterations }).keys()) {
        const input = screen.getByPlaceholderText(
          `Button input placeholder ${index}`,
        );
        await userEvent.click(input);
        await waitFor(() =>
          expect(
            screen.getByPlaceholderText(
              `Service textarea placeholder ${index}`,
            ),
          ),
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

    it("getByDisplayValue selector performance", async () => {
      for (const index of Array.from({ length: iterations }).keys()) {
        const input = screen.getByDisplayValue(`Button input value ${index}`);
        await userEvent.click(input);
        await waitFor(() =>
          expect(screen.getByDisplayValue(`Service textarea value ${index}`)),
        );
      }
    });

    it("getByAltText selector performance", async () => {
      for (const index of Array.from({ length: iterations }).keys()) {
        const img = screen.getByAltText(`Button image alt ${index}`);
        await userEvent.click(img);
        await waitFor(() =>
          expect(
            screen.getByAltText(`Service image alt ${index}`),
          ).toBeInTheDocument(),
        );
      }
    });

    it("getByTitle selector performance", async () => {
      for (const index of Array.from({ length: iterations }).keys()) {
        const button = screen.getByTitle(`Button title ${index}`);
        await userEvent.click(button);
        await waitFor(() =>
          expect(
            screen.getByTitle(`Service title ${index}`),
          ).toBeInTheDocument(),
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
