import { useState } from "react";

function EducationForm({ handleEducationForm }) {
  const [inputs, setInputs] = useState({
    school: "",
    graduation: "",
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleEducationForm(inputs);
        setInputs({
          school: "",
          graduation: "",
        });
      }}
    >
      <legend>Education</legend>
      <fieldset>
        <label htmlFor="school">School:</label>
        <input
          type="text"
          name="school"
          id="school"
          value={inputs.school}
          onChange={(e) => setInputs({ ...inputs, school: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="graduation">Graduation:</label>
        <input
          type="text"
          name="graduation"
          id="graduation"
          value={inputs.graduation}
          onChange={(e) => setInputs({ ...inputs, graduation: e.target.value })}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
}

export default EducationForm;
