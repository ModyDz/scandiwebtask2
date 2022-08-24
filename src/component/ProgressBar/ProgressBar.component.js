// import PropTypes from 'prop-types';
import { PureComponent } from "react";
import "./ProgressBar.style";

export class ProgressBar extends PureComponent {
  static propTypes = {
    // TODO: implement prop-types
  };
  render() {
    const { steps, currentStep, StepsText } = this.props;
    const progress = steps / currentStep;
    return (
      <div className="ProgressBar">
        <div
          className="ProgressBar-Current"
          style={{ width: `${100 / progress}%` }}
        />
        {StepsText.map((stepText, index) => {
          const stepPosition = steps / (index + 1);
          return (
            <div
              className="ProgressBar-Step"
              style={{
                left: `${100 / stepPosition}%`,
                backgroundColor: currentStep < index + 1 && "lightgray",
                color: currentStep < index + 1 && "black",
              }}
            >
              {index + 1}
              <div
                className="ProgressBar-StepText"
                style={{ color: currentStep < index + 1 && "lightgray" }}
              >
                {stepText}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProgressBar;
