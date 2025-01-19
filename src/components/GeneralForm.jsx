import { useState } from "react";

function GeneralForm({ handleGeneralForm }) {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [open, setOpen] = useState(true);

  return open ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleGeneralForm(inputs);
        setOpen(false);
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
  ) : (
    <div className="form-bar">
      <span className="bar-title">General</span>
      <button className="edit-btn" onClick={() => setOpen(true)}>
        Edit
      </button>
    </div>
  );
}

export default GeneralForm;
