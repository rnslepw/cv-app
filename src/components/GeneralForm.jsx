import { useState } from "react";

function GeneralForm({ handleGeneralForm }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleGeneralForm(inputs);
        setInputs({
          name: "",
          email: "",
          phone: "",
        });
      }}
    >
      <legend>General</legend>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputs.name}
          onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={inputs.email}
          onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
        />
      </fieldset>
      <fieldset>
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={inputs.phone}
          onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
        />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
}

export default GeneralForm;
