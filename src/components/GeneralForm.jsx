function GeneralForm() {
  return (
    <form>
      <legend>General</legend>
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name" />
      </fieldset>
      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </fieldset>
      <fieldset>
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone" id="phone" />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
}

export default GeneralForm;
