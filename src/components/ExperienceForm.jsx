import { useState } from "react";

function ExperienceForm({ handleExperienceForm }) {
  const [inputs, setInputs] = useState({
    company: "",
    position: "",
    period: "",
  });
  const [open, setOpen] = useState(true);

  return open ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleExperienceForm(inputs);
        setOpen(false);
      }}
    >
      <legend>Experience</legend>
      <fieldset>
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          value={inputs.company}
          onChange={(e) => setInputs({ ...inputs, company: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          name="position"
          id="position"
          value={inputs.position}
          onChange={(e) => setInputs({ ...inputs, position: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="period">Period:</label>
        <input
          type="text"
          name="period"
          id="period"
          value={inputs.period}
          onChange={(e) => setInputs({ ...inputs, period: e.target.value })}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  ) : (
    <div className="form-bar">
      <span className="bar-title">Experience</span>
      <button className="edit-btn" onClick={() => setOpen(true)}>
        Edit
      </button>
    </div>
  );
}

export default ExperienceForm;
