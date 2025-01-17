function EducationForm() {
  return (
    <form>
      <legend>Education</legend>
      <fieldset>
        <label htmlFor="school">School:</label>
        <input type="text" name="school" id="school" />
      </fieldset>
      <fieldset>
        <label htmlFor="years">Years:</label>
        <input type="text" name="years" id="years" />
      </fieldset>
      <button type="submit">Add</button>
    </form>
  );
}

export default EducationForm;
