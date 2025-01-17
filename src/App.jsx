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
      years: "2020",
    },
    experience: {
      company: "StartDown Corp",
      position: "Junior Web Developer",
      date: "2022-2024",
    },
  });

  return (
    <div className="container">
      <aside className="forms">
        <h1>Enter your info below</h1>
        <GeneralForm />
        <EducationForm />
        <ExperienceForm />
      </aside>
      <main className="resume">
        <Resume info={info} />
      </main>
    </div>
  );
}

export default App;
