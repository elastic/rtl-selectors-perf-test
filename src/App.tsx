import { useState } from "react";
import { renderDeepDivWrappers } from "./utils/renderDeepDivWrappers";

export interface Props {
  iterations: number;
}

const App: React.FC<Props> = ({ iterations }) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  return renderDeepDivWrappers(
    <div data-testid="root">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#home" data-testid="nav-home" aria-label="Home Page">
                {"Home"}
              </a>
            </li>
            <li>
              <a href="#about" data-testid="nav-about" aria-label="About Us">
                {"About"}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                data-testid="nav-contact"
                aria-label="Contact Us"
              >
                {"Contact"}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section aria-label="Introduction">
          <h1 data-testid="main-heading">Welcome to Our Website</h1>
          <p data-testid="intro-text">
            We offer a variety of services to cater to your needs.
          </p>
        </section>
        <section aria-label="Services">
          {Array.from({ length: iterations }).map((_, index) => (
            <article key={index} data-testid={`service-${index}`}>
              <h2>Service {index}</h2>
              {renderDeepDivWrappers(<p>Some divs 1</p>, iterations)}
              {renderDeepDivWrappers(<p>Some divs 2</p>, iterations)}
              {renderDeepDivWrappers(
                open[index] ? (
                  <p
                    aria-label={`Service label ${index}`}
                    data-testid={`service-test-id-${index}`}
                  >
                    {`Service text ${index}`}
                  </p>
                ) : null,
                iterations,
              )}
              {renderDeepDivWrappers(
                <button
                  data-testid={`button-test-id-${index}`}
                  aria-label={`Button label ${index}`}
                  onClick={() => setOpen({ ...open, [index]: !open[index] })}
                >
                  {`Button text ${index}`}
                </button>,
                iterations,
              )}
            </article>
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Our Company</p>
        <a href="privacy-policy" data-testid="privacy-policy-link">
          {"Privacy Policy"}
        </a>
      </footer>
    </div>,
    iterations,
  );
};

export default App;
