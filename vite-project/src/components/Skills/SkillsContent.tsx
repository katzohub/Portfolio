import { useState, useEffect } from "react";
import dataSkills from "../../constants/DataSkills";
import { CheckedStateProps } from "../../types";
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
import { motion, AnimatePresence } from "framer-motion";

const MotionStyledSkillsContainer = motion(StyledSkillsContainer);

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
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  return (
    <AnimatePresence>
      {isReady && (
        <MotionStyledSkillsContainer
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <StyledSkillsWrapp>
            <StyledSkillsWrapper>
              <StyledSkillsGridContainer>
                {filteredProjects.map((project) => (
                  <StyledSkillsGridWrapper item key={project.id}>
                    <StyledSkillsCard>
                      <img src={project.img} alt={project.nameProject} />
                      <StyledSkillCardHeading>
                        <h2>
                          {intl.formatMessage({ id: project.nameProject })}
                        </h2>
                        <p>
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
                          <a href={project.openProject} target="_blank">
                            {intl.formatMessage({ id: "project.viewProject" })}
                          </a>
                        </StyledSkillCardBtn>
                      </StyledSkillCardHeading>
                    </StyledSkillsCard>
                  </StyledSkillsGridWrapper>
                ))}
              </StyledSkillsGridContainer>
            </StyledSkillsWrapper>
          </StyledSkillsWrapp>
        </MotionStyledSkillsContainer>
      )}
    </AnimatePresence>
  );
};

export default SkillsContent;
