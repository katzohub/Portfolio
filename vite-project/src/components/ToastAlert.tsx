import { ReactNode } from "react";
import { Snackbar, Alert } from "@mui/material";

interface ToastAlertProps {
  openToast: boolean;
  handleClosedToast: () => void;
  messageToast: string | ReactNode;
  severity: "success" | "error" | "warning" | "info";
}

const ToastAlert = ({
  openToast,
  handleClosedToast,
  messageToast,
  severity,
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
          severity={severity}
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
