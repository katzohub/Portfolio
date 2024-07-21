import {
  StyledContainerError,
  StyledPrimaryTextError,
  StyledGeneralTextError,
} from "./StyledPages";

const Eroor = () => {
  return (
    <>
      <StyledContainerError>
        <StyledGeneralTextError variant="h1" fontSize={35}>
          404 Not Found
        </StyledGeneralTextError>
        <StyledPrimaryTextError variant="h4" fontSize={20} mt={3}>
          The page that does not exist!
        </StyledPrimaryTextError>
      </StyledContainerError>
    </>
  );
};

export default Eroor;
