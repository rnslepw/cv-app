function ResumeExperience({ experience }) {
  return (
    <section>
      <h3>Experience</h3>
      <p>Company: {experience.company}</p>
      <p>Position: {experience.position}</p>
      <p>Period: {experience.period}</p>
      <button className="edit-btn">Edit</button>
    </section>
  );
}

export default ResumeExperience;
