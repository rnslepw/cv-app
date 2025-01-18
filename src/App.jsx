import { useState } from "react";

import GeneralForm from "./components/GeneralForm";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";

import Resume from "./components/Resume";

function App() {
  const [info, setInfo] = useState({
    general: {
      name: "John Smith",
      email: "jsmith@mail.com",
      phone: "123-456-789",
    },
    education: {
      school: "State university",
      graduation: "2020",
    },
    experience: {
      company: "StartDown Corp",
      position: "Junior Web Developer",
      period: "2022-2024",
    },
    showing: {
      general: true,
      education: true,
      experience: true,
    },
  });

  function handleGeneralForm(generalObj) {
    const newInfo = { ...info, general: generalObj };
    setInfo(newInfo);
  }

  function handleEducationForm(educationObj) {
    const newInfo = { ...info, education: educationObj };
    setInfo(newInfo);
  }

  function handleExperienceForm(experienceObj) {
    const newInfo = { ...info, experience: experienceObj };
    setInfo(newInfo);
  }

  return (
    <div className="container">
      <aside className="forms">
        <h1>Enter your info below</h1>
        <GeneralForm handleGeneralForm={handleGeneralForm} />
        <EducationForm handleEducationForm={handleEducationForm} />
        <ExperienceForm handleExperienceForm={handleExperienceForm} />
      </aside>
      <main className="resume">
        <Resume info={info} />
      </main>
    </div>
  );
}

export default App;
