function ResumeEducation({ education }) {
  console.log(education);

  return (
    <section>
      <h3>Education</h3>
      <p>
        {education.school} - {education.graduation}
      </p>
      <button className="edit-btn">Edit</button>
    </section>
  );
}

export default ResumeEducation;
