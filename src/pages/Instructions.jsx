import "../App.css";

const Instructions = () => {
  return (
    <div className="instruction-box">
      <div>
        <h1>Instructions</h1>
        <ol>
          <li>
            Type the exact keys displayed on the screen with Proper Spacing.
          </li>
          <li>
            You can press the backspace key once to correct a mistake on the
            current key.
          </li>
          <li> Pressing the enter key won't stop the typing test. </li>
          <li>
            If you want to end the test before the 5-minute countdown, click on
            the "End Test" button.
          </li>
          <li>
            Once the 5 minutes are up, you will automatically receive all the
            test metrics.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Instructions;
