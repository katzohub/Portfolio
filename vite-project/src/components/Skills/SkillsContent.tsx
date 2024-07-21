import dataSkills from "../../constants/DataSkills";
import { CheckedStateProps } from "../../types";
import usePageStyles from "../../styles/stylePages";
import {
  StyledSkillsContainer,
  StyledSkillsWrapp,
  StyledSkillsWrapper,
  StyledSkillsGridContainer,
  StyledSkillsGridWrapper,
  StyledSkillsCard,
  StyledSkillCardHeading,
  StyledSkillCardContainer,
  StyledSkillCardIconWrap,
  StyledSkillCardBtn,
} from "./StyledSkills";
import { useIntl } from "react-intl";

const SkillsContent = ({
  checkedState,
}: {
  checkedState: CheckedStateProps;
}) => {
  const intl = useIntl();
  const filteredProjects = checkedState.all
    ? dataSkills
    : dataSkills.filter((project) =>
        Object.entries(checkedState).some(
          ([key, value]) => value && project.technologies.includes(key)
        )
      );
  const classes = usePageStyles();
  return (
    <StyledSkillsContainer>
      <StyledSkillsWrapp>
        <StyledSkillsWrapper>
          <StyledSkillsGridContainer container spacing={2}>
            {filteredProjects.map((project) => (
              <StyledSkillsGridWrapper item xs={12} md={4} key={project.id}>
                <StyledSkillsCard>
                  <img src={project.img} alt={project.nameProject} />
                  <StyledSkillCardHeading>
                    <h2 className="heading-card">
                      {intl.formatMessage({ id: project.nameProject })}
                    </h2>
                    <p className="description-card">
                      {intl.formatMessage({ id: project.detailProject })}
                    </p>

                    <StyledSkillCardContainer>
                      {project.icon &&
                        project.icon.map((icon, index) => (
                          <StyledSkillCardIconWrap key={index}>
                            {icon}
                          </StyledSkillCardIconWrap>
                        ))}
                    </StyledSkillCardContainer>
                    <StyledSkillCardBtn variant="contained">
                      <a
                        href={project.openProject}
                        target="_blank"
                        className={classes.skillCardLink}
                      >
                        View-Project
                      </a>
                    </StyledSkillCardBtn>
                  </StyledSkillCardHeading>
                </StyledSkillsCard>
              </StyledSkillsGridWrapper>
            ))}
          </StyledSkillsGridContainer>
        </StyledSkillsWrapper>
      </StyledSkillsWrapp>
    </StyledSkillsContainer>
  );
};

export default SkillsContent;
