function ResumeExperience({ experience }) {
  return (
    <section>
      <h3>Experience</h3>
      <p>Company: {experience.company}</p>
      <p>Position: {experience.position}</p>
      <p>Period: {experience.period}</p>
    </section>
  );
}

export default ResumeExperience;
