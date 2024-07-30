import { useState } from "react";
import { GeneralBoard } from "../components";
import { CheckedStateProps } from "../types";
import {
  SkillsContent,
  SkillsSidebar,
  SkillsAlert,
} from "../components/Skills";

const Skills: React.FC = () => {
  const [checkedState, setCheckedState] = useState<CheckedStateProps>({
    all: true,
    html: false,
    css: false,
    sass: false,
    tailwind: false,
    mui: false,
    javascript: false,
    typescript: false,
    php: false,
    react: false,
    firebase: false,
  });

  const areAllCheckboxesFalse = () => {
    return Object.values(checkedState).every((value) => !value);
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    if (name === "all") {
      setCheckedState({
        all: checked,
        html: false,
        css: false,
        sass: false,
        tailwind: false,
        mui: false,
        javascript: false,
        typescript: false,
        php: false,
        react: false,
        firebase: false,
      });
    } else {
      setCheckedState({ ...checkedState, [name]: checked, all: false });
    }
  };

  return (
    <>
      <GeneralBoard
        generalHeading="project.category"
        generalText="project.projects"
        leftTemplate={
          <SkillsSidebar
            checkedState={checkedState}
            handleCheckboxChange={handleCheckboxChange}
          />
        }
        generalTemplate={<SkillsContent checkedState={checkedState} />}
        smallGeneralHeading="project.projects"
      />
      {areAllCheckboxesFalse() && <SkillsAlert />}
    </>
  );
};

export default Skills;
