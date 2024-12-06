import { useState } from "react";
import { renderDeepDivWrappers } from "./utils/renderDeepDivWrappers";
import {
  EuiHeader,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLinks,
  EuiHeaderLink,
  EuiPage,
  EuiPageSection,
  EuiTitle,
  EuiText,
  EuiCard,
  EuiButton,
  EuiTextArea,
  EuiImage,
  EuiFieldText,
  EuiSpacer,
  EuiFlexGroup,
  EuiFlexItem,
} from "@elastic/eui";
import styled from "styled-components";

const StyledWrapper = styled.div`
  position: relative;
  background: linear-gradient(135deg, #f6f8f9 0%, #e5ebee 50%, #d7dee3 100%);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.45);
  }
`;

const StyledSection = styled(EuiPageSection)`
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 8px;
  padding: 2rem;
  margin: 1rem 0;
`;

const StyledCard = styled(EuiCard)`
  backdrop-filter: blur(16px);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const StyledFooter = styled.footer`
  background: linear-gradient(90deg, #2c3e50 0%, #3498db 100%);
  color: white;
  padding: 2rem;
  border-radius: 0 0 12px 12px;
  text-align: center;
`;

export interface Props {
  iterations: number;
}

const App: React.FC<Props> = ({ iterations }) => {
  const halfIterations = Math.ceil(iterations / 2);
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return renderDeepDivWrappers(
    <StyledWrapper data-testid="root">
      <EuiHeader>
        <EuiHeaderSection>
          <EuiHeaderSectionItem>
            <EuiHeaderLinks>
              <EuiHeaderLink
                href="#home"
                data-testid="nav-home"
                aria-label="Home Page"
              >
                Home
              </EuiHeaderLink>
              <EuiHeaderLink
                href="#about"
                data-testid="nav-about"
                aria-label="About Us"
              >
                About
              </EuiHeaderLink>
              <EuiHeaderLink
                href="#contact"
                data-testid="nav-contact"
                aria-label="Contact Us"
              >
                Contact
              </EuiHeaderLink>
            </EuiHeaderLinks>
          </EuiHeaderSectionItem>
        </EuiHeaderSection>
      </EuiHeader>

      <EuiPage>
        <StyledSection aria-label="Introduction">
          <EuiTitle data-testid="main-heading">
            <h1>Welcome to Our Website</h1>
          </EuiTitle>
          <EuiText data-testid="intro-text">
            <p>We offer a variety of services to cater to your needs.</p>
          </EuiText>
        </StyledSection>

        <StyledSection aria-label="Services">
          <EuiFlexGroup direction="column">
            {Array.from({ length: iterations }).map((_, index) => (
              <EuiFlexItem key={index}>
                <StyledCard
                  data-testid={`service-${index}`}
                  title={`Service ${index}`}
                  description=""
                >
                  {renderDeepDivWrappers(
                    <EuiText>
                      <p>Some divs 1</p>
                    </EuiText>,
                    iterations,
                  )}
                  {renderDeepDivWrappers(
                    <EuiText>
                      <p>Some divs 2</p>
                    </EuiText>,
                    iterations,
                  )}
                  {renderDeepDivWrappers(
                    open[index] ? (
                      <div>
                        <EuiTextArea
                          aria-label={`Service textarea label ${index}`}
                          placeholder={`Service textarea placeholder ${index}`}
                          defaultValue={`Service textarea value ${index}`}
                        />
                        <EuiText
                          component="p"
                          title={`Service title ${index}`}
                          aria-label={`Service label ${index}`}
                          data-testid={`service-test-id-${index}`}
                        >{`Service text ${index}`}</EuiText>
                        <EuiImage
                          url={`https://via.placeholder.com/150?text=Image+label+${index}`}
                          alt={`Service image alt ${index}`}
                        />
                      </div>
                    ) : null,
                    halfIterations,
                  )}
                  {renderDeepDivWrappers(
                    <EuiButton
                      data-testid={`button-test-id-${index}`}
                      aria-label={`Button label ${index}`}
                      title={`Button title ${index}`}
                      onClick={() =>
                        setOpen({ ...open, [index]: !open[index] })
                      }
                    >
                      <EuiImage
                        url={`https://via.placeholder.com/150?text=Image+label+${index}`}
                        alt={`Button image alt ${index}`}
                      />
                      <span>{`Button text ${index}`}</span>
                      <EuiFieldText
                        defaultValue={`Button input value ${index}`}
                        placeholder={`Button input placeholder ${index}`}
                        aria-label={`Button input label ${index}`}
                      />
                    </EuiButton>,
                    halfIterations,
                  )}
                </StyledCard>
                <EuiSpacer />
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>
        </StyledSection>
      </EuiPage>

      <StyledFooter>
        <EuiText>
          <p>&copy; 2024 Our Company</p>
        </EuiText>
        <EuiHeaderLink href="privacy-policy" data-testid="privacy-policy-link">
          Privacy Policy
        </EuiHeaderLink>
      </StyledFooter>
    </StyledWrapper>,
    halfIterations,
  );
};

export default App;
