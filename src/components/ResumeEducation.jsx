function ResumeEducation({ education }) {
  return (
    <section>
      <h3>Education</h3>
      <p>
        {education.school} - {education.years}
      </p>
      <button className="edit-btn">Edit</button>
    </section>
  );
}

export default ResumeEducation;
