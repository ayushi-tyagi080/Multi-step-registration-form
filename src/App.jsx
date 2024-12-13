import { useState } from 'react'
import './App.css'



const App = () => {
  const [formStepsNum, setFormStepsNum] = useState(0);
  const totalSteps = 4;

  const handleNext = () => {
    if (formStepsNum < totalSteps - 1) {
      setFormStepsNum((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (formStepsNum > 0) {
      setFormStepsNum((prev) => prev - 1);
    }
  };

  return (
    <form action="#" className="form">
      <h1 className="text-center">Registration Form</h1>

      <div className="progressbar">
        <div
          className="progress"
          id="progress"
          style={{ width: `${(formStepsNum / (totalSteps - 1)) * 100}%` }}
        ></div>
        <div
          className={`progress-step ${formStepsNum >= 0 ? "progress-step-active" : ""}`}
          data-title="Intro"
        ></div>
        <div
          className={`progress-step ${formStepsNum >= 1 ? "progress-step-active" : ""}`}
          data-title="Contact"
        ></div>
        <div
          className={`progress-step ${formStepsNum >= 2 ? "progress-step-active" : ""}`}
          data-title="ID"
        ></div>
        <div
          className={`progress-step ${formStepsNum >= 3 ? "progress-step-active" : ""}`}
          data-title="Password"
        ></div>
      </div>

      <div className={`form-step ${formStepsNum === 0 ? "form-step-active" : ""}`}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="position">Position</label>
          <input type="text" name="position" id="position" />
        </div>
        <div className="">
          <button type="button" className="btn btn-next width-50 ml-auto" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>

      <div className={`form-step ${formStepsNum === 1 ? "form-step-active" : ""}`}>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="btns-group">
          <button type="button" className="btn btn-prev" onClick={handlePrev}>
            Previous
          </button>
          <button type="button" className="btn btn-next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>

      <div className={`form-step ${formStepsNum === 2 ? "form-step-active" : ""}`}>
        <div className="input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" />
        </div>
        <div className="input-group">
          <label htmlFor="ID">National ID</label>
          <input type="number" name="ID" id="ID" />
        </div>
        <div className="btns-group">
          <button type="button" className="btn btn-prev" onClick={handlePrev}>
            Previous
          </button>
          <button type="button" className="btn btn-next" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>

      <div className={`form-step ${formStepsNum === 3 ? "form-step-active" : ""}`}>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </div>
        <div className="btns-group">
          <button type="button" className="btn btn-prev" onClick={handlePrev}>
            Previous
          </button>
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default App
