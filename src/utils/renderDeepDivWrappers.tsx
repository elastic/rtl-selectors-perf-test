import { EuiButton, EuiFieldText, EuiFormLabel, EuiText } from "@elastic/eui";
import styled from "styled-components";

// eslint-disable-next-line react-refresh/only-export-components
const StyledDiv = styled.div`
  color: aqua;
  # a lot of complex styles

  // Base styles
  position: relative;
  width: 100%;
  max-width: 800px;
  min-height: 300px;
  padding: 2rem;
  margin: 0 auto;
  
  // Advanced background
  background: linear-gradient(135deg, #f6f8f9 0%, #e5ebee 50%, #d7dee3 100%);
  backdrop-filter: blur(10px);
  
  // Sophisticated border
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  
  // Typography
  font-family: system-ui, -apple-system, sans-serif;
  color: #2c3e50;
  line-height: 1.6;
  
  // Transitions
  transition: all 0.3s ease-in-out;
  
  // Hover effects
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.45);
  }
  
  // Media queries
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 200px;
  }
  
  // Pseudo-elements
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff3366, #ff6b6b, #4ecdc4);
    z-index: -1;
    border-radius: 14px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  &:hover::before {
    opacity: 0.3;
  }
  
  // Child element styling
  > * {
    position: relative;
    z-index: 1;
  }
`;

export const renderDeepDivWrappers = (
  child: React.ReactNode,
  depth: number = 10,
) => {
  if (depth === 0) {
    return child;
  }

  return (
    <StyledDiv>
      <EuiText>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </EuiText>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      <EuiText>
        <span>
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </EuiText>
      <span>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </span>
      <EuiText>
        <h3>
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. "
        </h3>
      </EuiText>
      <h3>
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. "
      </h3>
      <button>Button text</button>
      <EuiButton aria-label="Button label">Button text</EuiButton>
      <EuiFormLabel>Label text</EuiFormLabel>
      <label>Label text</label>
      <EuiText>
        <p aria-label="Service label">
          Service text Service text Service text Service text Service text
          Service Service text Service text Service text Service text Service
          text Service
        </p>
      </EuiText>
      <p aria-label="Service label">
        Service text Service text Service text Service text Service text Service
        Service text Service text Service text Service text Service text Service
      </p>
      <EuiText>
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
      </EuiText>
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
      <EuiButton
        data-testid={"button-test-id-"}
        aria-label={"Button label"}
        title={"Button title"}
      >
        <img
          src={"https://via.placeholder.com/150?text=Image+label"}
          alt={"Button image alt"}
        />
        <span>{"Button text"}</span>
        <EuiFieldText
          defaultValue={"Button input value"}
          placeholder={"Button input placeholder"}
          aria-label={"Button input label"}
        />
      </EuiButton>
      {renderDeepDivWrappers(child, depth - 1)}
    </StyledDiv>
  );
};
