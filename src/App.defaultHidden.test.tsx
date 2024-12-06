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

describe("App.defaultHidden", () => {
  // The hidden attribute is only only affecting `ByRole` queries
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
    },
  );
});
