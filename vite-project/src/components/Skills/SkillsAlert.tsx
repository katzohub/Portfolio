import { useIntl } from "react-intl";
import { StyledContainerAlert } from "./StyledSkills";

const SkillsAlert = () => {
  const intl = useIntl();
  return (
    <>
      <StyledContainerAlert>
        <h1>
          {intl.formatMessage({ id: "project.sorry" })}.
          <br />
          {intl.formatMessage({ id: "project.please" })}
        </h1>
      </StyledContainerAlert>
    </>
  );
};

export default SkillsAlert;
