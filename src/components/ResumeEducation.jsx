function ResumeEducation({ education }) {
  return (
    <section>
      <h3>Education</h3>
      <p>School: {education.school}</p>
      <p>Graduation: {education.graduation}</p>
    </section>
  );
}

export default ResumeEducation;
