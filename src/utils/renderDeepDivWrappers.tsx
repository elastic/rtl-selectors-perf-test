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
      {renderDeepDivWrappers(child, depth - 1)}
    </div>
  );
};
