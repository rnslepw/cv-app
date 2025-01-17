function ExperienceForm() {
  return (
    <form>
      <legend>Experience</legend>
      <fieldset>
        <label htmlFor="company">Company</label>
        <input type="text" name="company" id="company" />
      </fieldset>
      <fieldset>
        <label htmlFor="position">Position:</label>
        <input type="text" name="position" id="position" />
      </fieldset>
      <fieldset>
        <label htmlFor="date">Date:</label>
        <input type="text" name="date" id="date" />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
}

export default ExperienceForm;
