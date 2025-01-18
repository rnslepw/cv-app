import { useState } from "react";

function ExperienceForm({ handleExperienceForm }) {
  const [inputs, setInputs] = useState({
    company: "",
    position: "",
    period: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleExperienceForm(inputs);
        setInputs({
          company: "",
          position: "",
          period: "",
        });
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
  );
}

export default ExperienceForm;
