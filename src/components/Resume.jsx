import ResumeGeneral from "./ResumeGeneral";
import ResumeEducation from "./ResumeEducation";
import ResumeExperience from "./ResumeExperience";

function Resume({ info }) {
  return (
    <>
      <ResumeGeneral general={info.general} />
      <ResumeEducation education={info.education} />
      <ResumeExperience experience={info.experience} />
    </>
  );
}

export default Resume;
