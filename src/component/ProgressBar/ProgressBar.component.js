// import PropTypes from 'prop-types';
import { PureComponent } from "react";
import styled from "styled-components";

import "./ProgressBar.style";

const ProgressBarContainer = styled.div`
  background-color: lightgray;
  width: 100%;
  position: relative;
  height: 8px;
  margin-bottom: 2rem;
`;
const CurrentProgress = styled.div`
  background-color: var(--primary-base-color);
  height: 100%;
  position: absolute;
  left: 0;
  transition: width 0.3s ease;
  width: ${(props) => {
    const progress = props.steps / props.currentStep;
    return 100 / progress;
  }}%;
`;
const Step = styled.div`
  color: ${(props) =>
    props.currentStep >= props.stepIndex ? "white" : "black"};
  background-color: ${(props) =>
    props.currentStep >= props.stepIndex
      ? "var(--primary-base-color)"
      : "lightgray"};
  transition: 0.3s ease background-color;
  height: 30px;
  width: 30px;
  border-radius: 50px;
  position: absolute;
  left: ${(props) => {
    const progress = props.steps / props.stepIndex;
    return 100 / progress;
  }}%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -120%;
  font-size: 1.5rem;
`;
export class ProgressBar extends PureComponent {
  static propTypes = {
    // TODO: implement prop-types
  };
  render() {
    const { steps, currentStep } = this.props;
    return (
      <ProgressBarContainer>
        <CurrentProgress currentStep={currentStep} steps={steps} />
        {Array(steps)
          .fill(0)
          .map((element, index) => (
            <Step currentStep={currentStep} steps={steps} stepIndex={index + 1}>
              {index + 1}
            </Step>
          ))}
      </ProgressBarContainer>
    );
  }
}

export default ProgressBar;
