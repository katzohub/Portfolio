import { FC } from "react";
import {
  StyledDrawer,
  StyledDrawerListContainer,
  StyledDrawerListItems,
  StyledDrawerIcenBtn,
} from "./StyledComponents";
import Navigation from "./Navigation";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { MobileDrawerProps } from "../types";

const MobileDrawer: FC<MobileDrawerProps> = ({
  myOnOpen,
  myOnCloseFn,
  onSelectItem,
}) => {
  return (
    <>
      <StyledDrawer
        variant="temporary"
        PaperProps={{ style: { width: "256px" } }}
        open={myOnOpen}
        onClose={myOnCloseFn}
        anchor="right"
      >
        <StyledDrawerListContainer disablePadding>
          <StyledDrawerListItems sx={{ py: 1.5, px: 3 }}>
            <StyledDrawerIcenBtn onClick={myOnCloseFn} aria-label="delete">
              <ChevronRightIcon />
            </StyledDrawerIcenBtn>
          </StyledDrawerListItems>
          <Navigation isNavigationLink={true} onSelectItem={onSelectItem} />
        </StyledDrawerListContainer>
      </StyledDrawer>
    </>
  );
};

export default MobileDrawer;
