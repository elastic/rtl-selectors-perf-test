import { useState } from "react";

const renderDeepDivWrappers = (child: React.ReactNode, depth: number = 10) => {
  if (depth === 0) {
    return child;
  }

  return (
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <span>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <h3>
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. "
      </h3>
      <button aria-label="Button label">Button text</button>
      <button>Button text</button>
      <label>Label text</label>
      <label>Label text</label>
      <p aria-label="Service label">
        Service text Service text Service text Service text Service text Service
        Service text Service text Service text Service text Service text Service
      </p>
      {renderDeepDivWrappers(child, depth - 1)}
    </div>
  );
};

const App: React.FC = () => {
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
          {Array.from({ length: 10 }).map((_, index) => (
            <article key={index} data-testid={`service-${index}`}>
              <h2>Service {index}</h2>
              {renderDeepDivWrappers(
                <button
                  data-testid={`button-test-id-${index}`}
                  aria-label={`Button label ${index}`}
                  onClick={() => setOpen({ ...open, [index]: !open[index] })}
                >
                  {`Button text ${index}`}
                </button>,
                4,
              )}
              {renderDeepDivWrappers(
                open[index] ? (
                  <p
                    aria-label={`Service label ${index}`}
                    data-testid={`service-test-id-${index}`}
                  >
                    {`Service text ${index}`}
                  </p>
                ) : null,
                6,
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
    5,
  );
};

export default App;
