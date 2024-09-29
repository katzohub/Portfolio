import { ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

interface ToastAlertProps {
  openToast: boolean;
  handleClosedToast: () => void;
  messageToast: string | ReactNode;
}

const ToastAlert = ({
  openToast,
  handleClosedToast,
  messageToast,
}: ToastAlertProps) => {
  return (
    <>
      <Snackbar
        sx={{ zIndex: 999999 }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openToast}
        autoHideDuration={5000}
        onClose={handleClosedToast}
      >
        <Alert
          onClose={handleClosedToast}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {messageToast}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ToastAlert;
