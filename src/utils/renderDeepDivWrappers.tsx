export const renderDeepDivWrappers = (
  child: React.ReactNode,
  depth: number = 10,
) => {
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
      <p
        title={"Service title"}
        aria-label={"Service label"}
        data-testid={"service-test-id"}
      >
        <textarea
          aria-label={"Service textarea label"}
          placeholder={"Service textarea placeholder"}
          defaultValue={"Service textarea value"}
        />
        {"Service text"}
        <img
          src={"https://via.placeholder.com/150?text=Image+label"}
          alt={"Service image alt"}
        />
      </p>
      <button
        data-testid={"button-test-id-"}
        aria-label={"Button label"}
        title={"Button title"}
      >
        <img
          src={"https://via.placeholder.com/150?text=Image+label"}
          alt={"Button image alt"}
        />
        <span>{"Button text"}</span>
        <input
          type="text"
          defaultValue={"Button input value"}
          placeholder={"Button input placeholder"}
          aria-label={"Button input label"}
        />
      </button>
      {renderDeepDivWrappers(child, depth - 1)}
    </div>
  );
};
